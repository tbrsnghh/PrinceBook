import React, { useState } from 'react'
import { Table } from 'reactstrap';
import Users from './Users';
export default function ListUser() {

   
    return (
        <>

            <div class="content-wrapper">


                <div class="card card-primary mx-3">
                    <div class="card-header">
                        <h3 class="card-title">Danh sach user</h3>
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
                        <button type="submit" class="btn btn-primary">add new user</button>
                    </div>
                </div>
            </div>
        </>
    )
}
