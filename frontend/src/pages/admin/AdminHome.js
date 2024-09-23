import React, { useEffect } from 'react'
import Header from '../../components/admin/components/Header'
import Dasborad from '../../components/admin/components/Dasborad'
import Footer from '../../components/admin/components/Footer'
import Chart from '../../components/admin/components/Chart'


export default function AdminHome() {



  return (
    <>
      <Header />

      <Dasborad />
      <Chart />
      <Footer />


    </>
  )
}
