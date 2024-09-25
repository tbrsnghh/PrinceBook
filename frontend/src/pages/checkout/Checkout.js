import React from 'react'
import DefaultLayout from '../../layout/default/DefaultLayout'
import CheckoutComp from '../../components/checkout/CheckoutComp'

export default function Checkout() {
  return (
    <DefaultLayout children={<CheckoutComp/>}/>
  )
}
