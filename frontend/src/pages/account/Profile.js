import React, { useEffect, useState } from 'react'

import { Button, Container, Table } from 'reactstrap'

import axios from 'axios';

export default function Profile() {

    const user = JSON.parse(localStorage.getItem('user'));




    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }




    const [dataOrder, setDateOrder] = useState({});


    const url = `http://localhost:8080/api/order/${user.username}`;
    const fetchdata = async () => {
        try {
            const response = await axios.get(url);
            setDateOrder(response.data.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchdata();
    }, [])


    return (
        <>
            <Container>


                <div className="flex justify-center items-center min-h-screen w-full">
                    <div className="bg-white p-2 rounded-lg shadow-md w-2/3">
                        <h2 className="text-xl font-semibold mb-6">Thông tin người dùng</h2>
                        <form>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Username: {user.username}</label>

                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Address</label>
                                <div className="flex space-x-4">

                                    <input type="text" className="w-2/3 p-2 border bg-white border-gray-300 rounded" value={user.address} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Password</label>
                                <div className="flex space-x-4">

                                    <input type="password" className="w-2/3 p-2 border border-gray-300 rounded bg-white" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Gmail</label>
                                <div className="flex space-x-4">

                                    <input type="text" className="w-2/3 p-2 border border-gray-300 rounded bg-white" value={user.gmail} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Phone</label>
                                <div className="flex space-x-4">

                                    <input type="text" className="w-2/3 p-2 border border-gray-300 rounded bg-white" value={user.phone} />
                                </div>
                            </div>


                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Note</label>
                                <input type="date" className="w-1/3 p-2 border border-gray-300 rounded bg-white" value={user.ngay_sinh} />
                            </div>
                            <button type="button" className="w-full bg-black text-white p-2 rounded flex items-center justify-center">
                                <span>Save changes</span>
                                <i className="fas fa-lock ml-2"></i>
                            </button>
                        </form>
                        <div className="mt-4 text-center">

                            <Button className=" bg-black text-white p-2 rounded flex items-center justify-center" onClick={() => logout()}>Logout</Button>
                        </div>
                    </div>

                </div>


                <div className='mb-4'>

                    <h3>Order Table</h3>
                    <Table className='mb-8'
                    >
                        <thead>
                            <tr>
                                <th>
                                    Order_id
                                </th>
                                <th>
                                    username
                                </th>
                                <th>
                                    address
                                </th>
                                <th>
                                    phone
                                </th>
                                <th>
                                    total_bill
                                </th>
                                <th>
                                    date_order
                                </th>
                                <th>
                                    payment
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                dataOrder.length > 0 &&
                                dataOrder.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            UIU00{item.id}
                                        </th>
                                        <td>
                                            {item.userName}
                                        </td>
                                        <td>
                                            {item.address}
                                        </td>
                                        <td>
                                            {item.phoneNumber}
                                        </td>
                                        <td>
                                            {item.totalPrice} VND
                                        </td>
                                        <td>
                                            {item.createdAt.slice(0, 10)}
                                        </td>
                                        <td>
                                            {item.paymentMethod}
                                        </td>
                                    </tr>
                                ))


                            }



                        </tbody>
                    </Table>


                </div>


            </Container>


        </>
    )
}
