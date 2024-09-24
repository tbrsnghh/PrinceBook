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
const {getAllOrder}=useSelector((state)=>state.order1)
 const dispatch=   useDispatch();
useEffect(() => {
    dispatch(getAllOrders());

},[])
  
console.log(getAllOrder);

  return (
   <>
   
   <Header/>

<Dasborad/>


<div class="content-wrapper">


                <div class="card card-primary mx-3">
                    <div class="card-header">
                        <h3 class="card-title">List order</h3>
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
                                 Gmail
                                </th>
                                <th>
                              total_amount
                                </th>
                                <th>
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                        
                  
                        </tbody>
                    </Table>
                    <div class="card-footer">
                <Link to={"/admin/user/adduser"}>       <button type="submit" class="btn btn-primary">add new user</button> </Link>  


               
              
                    </div>
                </div>
            </div>

<Footer/>
   
   </>
  )
}
