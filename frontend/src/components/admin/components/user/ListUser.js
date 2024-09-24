import React, { useState } from 'react'
import { Table } from 'reactstrap';
import Users from './Users';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
export default function ListUser() {

   
    return (
        <>
     <ToastContainer/>
            <div class="content-wrapper">


                <div class="card card-primary mx-3">
                    <div class="card-header">
                        <h3 class="card-title">List User</h3>
                    </div>
                    <Table
       
                        responsive
              
                    >
                        <thead>
                            <tr>
                               
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
                                Role
                                </th>
                                <th>
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <Users/>
                           

                        </tbody>
                    </Table>
                    <div class="card-footer">
                <Link to={"/admin/user/adduser"}>       <button type="submit" class="btn btn-primary">add new user</button></Link> 
                    </div>
                </div>
            </div>
        </>
    )
}
