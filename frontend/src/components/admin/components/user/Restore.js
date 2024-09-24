import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'
import { deleteUser, ListRetore, restoreUser } from '../../../../store/UserSlice';
import { CSVLink } from 'react-csv';

export default function Restore() {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(ListRetore());
    }, [])

    const { listRestore } = useSelector((state) => state.user);
    const ListRestoreArr = Array.isArray(listRestore) ? listRestore : [];
    const headers = [
        { label: "Username", key: "username" },
        { label: "Phone", key: "phone" },
        { label: "Address", key: "address" },
        { label: "Gmail", key: "gmail" },
        { label: "Role", key: "role" }
      
      ];
    
      // Dữ liệu cho CSV, bao gồm nút action
      const csvData = ListRestoreArr.map((user) => ({
        username: user.username,
        phone: user.phone,
        address: user.address,
        gmail: user.gmail,
        role: user.role,
       
      }));
    


    const handle_restore = (id) => {
        dispatch(restoreUser(id));
    }
    const handle_delete = (id) => {
        dispatch(deleteUser(id));
        window.location.reload();
    }
    return (
        <>

            <div class="content-wrapper">


                <div class="card card-primary mx-3">
                    <div class="card-header">
                        <h3 class="card-title">Restore</h3>
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

                            {
                                ListRestoreArr.map((user, index) => (
                                    <tr key={index} >

                                    <td>
                                       {user.username}
                                    </td>
                                    <td>
                                    {user.phone}
                                    </td>
                                    <td>
                                    {user.address}
                                    </td>
                                    <td>
                                    {user.gmail}
                                    </td>
                                    <td>
                                    {user.role}
                                    </td>
                                    <td>
                                        <Button className=' bg-orange' onClick={()=>handle_restore(user.id)} >restore</Button>
                                         | 
                                        <Button className='bg-danger' onClick={()=>handle_delete(user.id)} >   destroy</Button>
                                    </td>
                                </tr>
                                ))
                            }
                           


                        </tbody>
                    </Table>
                    <div class="card-footer">
                        <Link to={"/admin/user"}>      <Button type="submit" class="btn btn-primary bg-blue">list user</Button></Link>

                        <CSVLink
                        data={csvData} headers={headers} className='btn btn-primary'>
                            dowload
                        </CSVLink>
                    </div>
                </div>
            </div>




        </>
    )
}
