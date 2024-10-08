import React, { useEffect } from 'react'
import Header from '../../../components/admin/components/Header'
import Dasborad from '../../../components/admin/components/Dasborad'
import Footer from '../../../components/admin/components/Footer'
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'
import { Bounce } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders, getListOrder } from '../../../store/Order1Slice'
import { CSVLink, CSVDownload } from "react-csv";

export default function HomeOrder() {

 const dispatch=   useDispatch();
useEffect(() => {
    dispatch(getAllOrders());

},[])
const {getAllOrder}=useSelector((state)=>state.order1)
const ListOrders =Array.isArray(getAllOrder) ? getAllOrder : [];
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
 

const headers = [

    { label: 'id_Order', key: 'id_Order' }, 
    { label: 'username', key: 'username' },
    { label: 'phone', key: 'phone' },
    { label: 'address', key: 'address' },
    { label: 'total_amount', key: 'total_amount' },
    { label: 'status', key: 'status' },
    { label: 'date_order', key: 'date_order' },

];
const csvData = ListOrders.map((item) => ({
  id_Order: item.id_Order,
  username: item.username,
  phone: item.phone,
  address: item.address,
  total_amount: item.totalPrice,
  status: item.status,
  date_order: item.createdAt,
  
}));

  return (
   <>
   
   <Header/>

<Dasborad/>


<div class="content-wrapper">


                <div class="card card-primary mx-3">
                    <div class="card-header">
                        <h3 class="card-title">List order</h3>
                        <CSVLink
                        data={csvData} headers={headers}  className='btn btn-success float-right'>
                          excel
                        </CSVLink>
                    </div>
                    <Table
       
                        responsive
              
                    >
                        <thead>
                            <tr>
                                <th>
                                   id_Order
                                </th>
                                <th>
                                   Username
                                </th>
                                <th>
                                 Phone
                                </th>
                                <th>
                                  Address
                                </th>
                                <th>
                              total_amount
                                </th>
                                <th>
                                 status
                                </th>
                              
                                <th>
                                   date_order
                                </th>
                            </tr>
                        </thead>
                        <tbody>
    {
ListOrders && ListOrders.map((item,index)=>(

  
    <tr key={index}>
       
    <td>{item.id}</td>  
    <td>    <Link to={`/admin/order/${item.id}`} state={item}>{item.userName}</Link></td>  
    <td>{item.phoneNumber}</td>  
    <td>{item.address}</td>  
   
    <td>{item.totalPrice}</td>  
    <td>{item.status}</td>  
    <td>  {   formatDate( item.createdAt)}</td>  
    <td>
  

    </td>

</tr>

))
    }
                        
                  
                        </tbody>
                    </Table>
                    <div class="card-footer">
            


               
              
                    </div>
                </div>
            </div>

<Footer/>
   
   </>
  )
}
