import React from 'react'
import "../dist/css/adminlte.min.css";
import { CChart } from '@coreui/react-chartjs';

export default function Chart() {
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
                    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                    datasets: [
                      {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10],
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
