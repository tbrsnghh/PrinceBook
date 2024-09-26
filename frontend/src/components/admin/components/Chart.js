import React, { useEffect, useState } from 'react'

import { CChart } from '@coreui/react-chartjs';
import axios from 'axios';

export default function Chart() {

  
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
      <div class="content-wrapper">
        <row class="d-flex mx-2">
          <section class="col-lg-5 connectedSortable ui-sortable">

            <div class="card">
              <div class="card-header ui-sortable-handle" >
                <h3 class="card-title">
                  <i class="fas fa-chart-pie mr-1"></i>
                  Sales
                </h3>
                <div class="card-tools">
                  <h3>tool</h3>
                </div>
              </div>
              <div class="card-body">
                <CChart

                  type="doughnut"

                  data={{
                    labels: ['User', 'Product', 'Order'],
                    datasets: [
                      {
                        backgroundColor: ['yellow', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [10, 20,  countOrders],
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        labels: {

                        }
                      }
                    },
                  }}
                />
              </div>
            </div>



          </section>
          <section class="col-lg-7 connectedSortable ui-sortable">


            <div class="card">
              <div class="card-header ui-sortable-handle" >
                <h3 class="card-title">
                  <i class="fas fa-chart-pie mr-1"></i>
                  Sales
                </h3>
                <div class="card-tools">
                  <h3>tool</h3>
                </div>
              </div>
              <div class="card-body">
              <CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }}
  labels="months"
  options={{
    plugins: {
      legend: {
        labels: {
   
        }
      }
    },
    scales: {
      x: {
        grid: {
       
        },
        ticks: {
    
        },
      },
      y: {
        grid: {

        },
        ticks: {

        },
      },
    },
  }}
/>
              </div>

            </div>

          </section>




        </row>
      </div>










    </>
  )
}
