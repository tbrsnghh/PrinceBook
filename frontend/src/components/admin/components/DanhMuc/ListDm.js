import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import Users from './Dm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCate } from '../../../../store/CateSclice';
import Dm from './Dm';
export default function ListDm() {


    const dispatch = useDispatch();


    
    useEffect(() => {
        dispatch(fetchCate());
    }, [])

    const  {categorie}  = useSelector(state => state.category);
    

    
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
          {
                categorie.map((item,index)=>(
                    <h1 key={index}>{item}</h1>
                ))
          }

                        </tbody>
                    </Table>
                    <div class="card-footer">
                        <Link to={"/admin/category/addDm"}>
                            <button type="submit" class="btn btn-primary" >thêm danh mục </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
