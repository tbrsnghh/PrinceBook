import React from 'react'

export default function AddUser() {
    return (
        <>
            <div class="content-wrapper">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Them user</h3>
                    </div>

                    <form role="form">
                        <div class="card-body">
                            <row class="d-flex">

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputName">Username</label>
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName">Date of birth</label>
                                        <input type="date" class="form-control" id="exampleInputName" placeholder="Enter name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                   

                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Phone</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="phone" />

                                    </div>

                                    <div className='form-group col-md-2'>
                                    <label for="exampleInputPassword1">vai tro</label>
                                    <select class="form-select" aria-label="Default select example">
                                 
                                        <option value="1">User</option>
                                        <option value="2">Admin</option>
                                        <option value="3">Nhan viên</option>
                                    </select>

                                </div>
                                </div>
                               
                            </row>

                        </div>


                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}
