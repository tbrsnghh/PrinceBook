import React, { useEffect } from 'react'
import Header from '../../components/admin/components/Header'
import Dasborad from '../../components/admin/components/Dasborad'
import Footer from '../../components/admin/components/Footer'
import Chart from '../../components/admin/components/Chart'
import '../../components/admin/dist/css/admin.css'
export default function AdminHome() {



  return (
    <div className='admin-wrapper'>
      <Header />

      <Dasborad />
      <Chart />
      <Footer />


    </div>
  );
}
