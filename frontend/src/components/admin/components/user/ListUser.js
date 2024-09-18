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
                                    #
                                </th>
                                <th>
                                    Ten dang nhap
                                </th>
                                <th>
                                    vai tro
                                </th>
                                <th>
                                    dia chi
                                </th>
                                <th>
                                    so dien thoai
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
                        <button type="submit" class="btn btn-primary">them nguoi dung </button>
                    </div>
                </div>
            </div>
        </>
    )
}
