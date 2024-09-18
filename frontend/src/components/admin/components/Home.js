import React from 'react'
import "../dist/css/adminlte.min.css";
export default function Home() {
  return (
    <>
     <section class="col-lg-7 connectedSortable ui-sortable">

     <div class="card">
              <div class="card-header ui-sortable-handle" >
                <h3 class="card-title">
                  <i class="fas fa-chart-pie mr-1"></i>
                  Sales
                </h3>
                <div class="card-tools">
                  <ul class="nav nav-pills ml-auto">
                    <li class="nav-item">
                      <a class="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <div class="tab-content p-0">
            
                  <div class="chart tab-pane active" id="revenue-chart" ><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                      <canvas id="revenue-chart-canvas" height="300"  width="900" class="chartjs-render-monitor"></canvas>                         
                   </div>
                  <div class="chart tab-pane" id="sales-chart" ><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    <canvas id="sales-chart-canvas" height="300"  class="chartjs-render-monitor" width="900"></canvas>                         
                  </div>  
                </div>
              </div>
            </div>



     </section>

    </>
  )
}
