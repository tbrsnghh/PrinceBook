import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Dasborad() {

  const [sumOrders, setSumOrders] = useState();
  const [countOrders, setCountOrders] = useState();
const sumOrder = async () => {
  const url = "http://localhost:8080/api/order/sumOrders";
  try {
    const response = await axios.get(url);
    setSumOrders(response.data.data);
  } catch (error) {
    console.log(error);
  }
}
const countOrder = async () => {
  const url = "http://localhost:8080/api/order/countOrders";
  try {
    const response = await axios.get(url);
    setCountOrders(response.data.data);
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  sumOrder();
  countOrder();
},[])


  return (
    <>
      <div class="content-wrapper mt-8">

        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Dashboard Admin</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>


        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-info elevation-1"><i class="fas fa-cog"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">Order quantity</span>
                    <span class="info-box-number">
                    {countOrders}
                   
                    </span>
                  </div>

                </div>

              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-paperclip"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">Products</span>
                    <span class="info-box-number">20</span>
                  </div>

                </div>

              </div>



         

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-success elevation-1"><i class="fas fa-shopping-cart"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">revenue</span>
                    <span class="info-box-number">{sumOrders} VND</span>
                  </div>

                </div>

              </div>

              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-users"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">Members</span>
                    <span class="info-box-number">10</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

      </div>


    </>
  )
}
