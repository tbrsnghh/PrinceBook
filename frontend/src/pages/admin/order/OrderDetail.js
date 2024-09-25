import React, { useEffect, useState } from 'react'
import Header from '../../../components/admin/components/Header'
import Dasborad from '../../../components/admin/components/Dasborad'
import Footer from '../../../components/admin/components/Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function OrderDetail() {
    const { id } = useParams();
    const [data2, setData2] = useState([])
    const [data, setData] = useState({})
    const url = 'http://localhost:8080/api/order/by/' + id;

    const fetchOrderDetail = async () => {
        try {
            const response = await axios.get(url);
           setData(response.data.data);

           
            
        } catch (error) {
            console.log(error);
        }
    }
    const url2 = 'http://localhost:8080/api/orderDetail/order/'+id;
    const fetchOrderDetail2 = async () => {
        try {
            const response2 = await axios.get(url2);
            setData2(response2.data.data); 

           
            
        } catch (error) {   
            console.log(error);
        }}

    useEffect(() => {
            fetchOrderDetail();
            fetchOrderDetail2();
    },[id])
console.log(data);
console.log('====================================');
console.log(data2);
console.log('====================================');
   
  return (
    <>
     <Header/>



<div class="content-wrapper">

<div class="card card-primary mx-3">

<div className="max-w-4xl mx-auto p-8 bg-white shadow-md">
                    <h1 className="text-4xl font-bold text-teal-700 text-center">Bill</h1>
                    <p className="text-center mt-2">Date order: {data.createdAt}</p>
                    <div className="flex justify-between mt-8">
                        <div>
                            <h2 className="font-bold text-teal-700">Customer:</h2>
                            <p>username: {data.userName}</p>
                            <p>address: {data.address}</p>
                            <p>gmail: {data.email}</p>
                            <p> phone: {data.phoneNumber}</p>
                        </div>
                       
                    </div>
                    <table className="w-full mt-8 border-collapse">
                        <thead>
                            <tr className="bg-teal-700 text-white">
                                <th className="p-2 border">Product</th>
                                <th className="p-2 border">quantity</th>
                                <th className="p-2 border">price</th>
                                <th className="p-2 border">total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data2.map((item, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-2 border">Book-aws-{item.bookId}</td>
                                    <td className="p-2 border text-center">{item.count}</td>
                                    <td className="p-2 border text-center">{item.price} VNĐ</td>
                                    <td className="p-2 border text-center">{item.price * item.count} VNĐ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-end mt-4">
                        <p className="font-bold"> Total: {data.totalPrice} VNĐ</p>
                    </div>
                    
                </div>


</div>

</div>

    <Footer/>
    </>
  )
}
