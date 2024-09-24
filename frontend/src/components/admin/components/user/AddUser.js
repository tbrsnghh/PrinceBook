import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../../store/UserSlice';
import { Button } from 'reactstrap';
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function AddUser() {
    const [userRes, setUserRes] = useState({
    
    });
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const { status, message } = useSelector((state) => state.user);
    const handle_change = (e) => {
      const { name, value } = e.target;
      setUserRes({ ...userRes, [name]: value });
    };
    const handle_signup = () => {
      dispatch(register(userRes));
      Navigate('/admin/user');

    }
useEffect(()=>{
    if(status && message=="User created successfully" ){
        toast.success(message)
    }else{
        toast.error(message)
    }
},[status,message])

    return (
        <>
        <ToastContainer/>
            <div class="content-wrapper">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Add new  user</h3>
                    </div>

                    <form >
                        <div class="card-body">
                            <row class="d-flex">

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputName">Username</label>
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name"  
                                         name='username'
                                         value={userRes.username}
                                         onChange={handle_change}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName">Date of birth</label>
                                        <input type="date" class="form-control" id="exampleInputName" placeholder="Enter name"
                                       name='ngay_sinh'
                                       value={userRes.ngay_sinh}
                                       onChange={handle_change}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1"> address</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder=" address"
                                        name='address'
                                        value={userRes.address}
                                        onChange={handle_change} />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" 
                                          name='password'
                                          value={userRes.password}
                                          onChange={handle_change} />
                                    </div>
                                   

                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Phone</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="phone"
                                        
                                        name='phone'
                                        value={userRes.phone}
                                        onChange={handle_change}/>

                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Gmail</label>
                                        <input type="email" class="form-control" id="exampleInputPassword1" placeholder="gmail" 
                                         name='gmail'
                                        value={userRes.gmail}
                                        onChange={handle_change}
                                         />

                                    </div>
                                    <div className='form-group col-md-2'>
                                    <label for="exampleInputPassword1">vai tro</label>
                                    <select class="form-select" aria-label="Default select example"  name='role'  onChange={handle_change} >
                                 
                                        <option value="USER">User</option>
                                        <option value="ADMIN">Admin</option>
                                      
                                    </select>

                                </div>
                                </div>
                               
                            </row>

                        </div>


                        <div class="card-footer">
                            <Button class="btn btn-primary" onClick={handle_signup}>Add new </Button>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}
