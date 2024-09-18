import React from 'react'
import { Table } from 'reactstrap';
export default function ListUser() {
    return (
        <>

            <div class="content-wrapper">


                <div class="card card-primary mx-3">
                    <div class="card-header">
                        <h3 class="card-title">Danh sach user</h3>
                    </div>
                    <Table
                        hover
                        responsive
                        striped
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
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Mark
                                </td>
                                <td>
                                    Otto
                                </td>
                                <td>
                                    @mdo
                                </td>
                                <td>
                                    @mdo
                                </td>
                                <td>
                                   sua | xoa
                                </td>
                            </tr>


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
