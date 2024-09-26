import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Items_order from "./Items_order";
import UserInfo from "./UserInfo";
import { postOrder } from "../../store/orderSlice";
import { removeItemFromCart } from "../../store/cartSlice";
import { postOrderDetail } from "../../store/orderDetailSlice";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Cập nhật import

const CheckoutComp = () => {
  const location = useLocation();
  const order_now = location.state?.order;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const items_order = order_now
    ? [order_now]
    : cart.cartItems.filter((item) => item.checked);
  const total_Price = order_now ? order_now.total : cart.totalMoney;
  const user_info = user.user;
  console.log(items_order);

  const [note, setNote] = useState("");
  const [shipping_address, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [order, setOrder] = useState({
    email: user_info.gmail,
    address: user_info.address,
    note: "",
    username: user_info.username,
    phone_number: user_info.phone,
    total_Price: total_Price,
    shipping_method: "",
    shipping_address: user_info.address,
    shipping_date: "",
    payment_method: "",
  });

  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      note: note,
      shipping_address: shipping_address,
      payment_method: paymentMethod,
    }));
  }, [note, shipping_address, paymentMethod]);

  const handleThanhToan = async () => {
    const resultAction = await dispatch(postOrder(order)).unwrap();
    if (resultAction.error) {
      console.log(resultAction.error);
      return;
    }

    items_order.forEach((item) => {
      dispatch(
        postOrderDetail({
          price: item.price,
          count: item.quantity,
          order_id: resultAction.data.id,
          book_id: item.id,
          total_price: item.total,
        })
      );
      dispatch(removeItemFromCart(item.id));
    });

    // Gửi email sau khi hoàn tất thanh toán
    const templateParams = {
      from_name: "Prince Book",
      to_email: order.email,
      to_name: order.username,
      message: `
        <h1>Cam on ban da ung ho PrinceBook. Prince Book chan thanh cam on ban!</h1>
        <h3>Your Information: </h3>
        <p>Tong tien: ${total_Price}</p>
        <p>Thanh toan: ${paymentMethod}</p>
        <p>Ngay dat hang: ${new Date().toLocaleDateString()}</p>
      `,
    };

    emailjs
      .send(
        "service_1z0i5cp",
        "template_26srqcd",
        templateParams,
        "aKdSpH011sM0d1DmZ"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        (err) => {
          console.error("Failed to send email. Error: ", err);
        }
      );

    setTimeout(() => {
      navigate("/ok");
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="flex flex-row items-start justify-between">
        <UserInfo
          order={order}
          note={note}
          setNote={setNote}
          shipping_address={shipping_address}
          setShippingAddress={setShippingAddress}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <div className="w-4"></div>
        <Items_order
          items={items_order}
          order={order}
          handleThanhToan={handleThanhToan}
        />
      </div>
    </div>
  );
};

export default CheckoutComp;
