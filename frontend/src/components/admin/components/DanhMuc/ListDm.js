import React, { useState } from 'react'
import { Table } from 'reactstrap';
import Users from './Dm';
export default function ListDm() {

   
    return (
        <>

            <div class="content-wrapper">


                <div class="card card-primary mx-3">
                    <div class="card-header">
                        <h3 class="card-title">Danh sách danh mục </h3>
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
                                    Tên danh mục
                                </th>
                                <th>
                                 hình ảnh 
                                </th>
                             
                              
                                <th>
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* map danh muc */}

                            <Users/>
                           

                        </tbody>
                    </Table>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">thêm danh mục </button>
                    </div>
                </div>
            </div>
        </>
    )
}
