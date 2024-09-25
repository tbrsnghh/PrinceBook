import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../store/orderSlice";

export default function MyOrder() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const { orderslist, status, error } = orders;

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(getOrders(user.username));
  }, [dispatch, user]);

  return (
    <div className="container">
      <h1>My Orders</h1>
      {status === "loading" && <div>Loading...</div>}
      {/* {error && <div>{error.message}</div>} */}
      {orderslist && (
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderslist.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.totalPrice}</td>
                <td>{order.status}</td>
                <td>
                  <Link to={`/order/${order.id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

