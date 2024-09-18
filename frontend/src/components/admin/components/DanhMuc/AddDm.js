import React from 'react'

export default function AddDm() {
    return (
        <>
            <div class="content-wrapper">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Them Danh mục </h3>
                    </div>

                    <form role="form">
                        <div class="card-body">
                            <row class="d-flex">

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="exampleInputName">Tên Danh mục </label>
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName">Hình ảnh danh mục  </label>
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="url hình ảnh" />
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
