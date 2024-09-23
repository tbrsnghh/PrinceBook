import React from 'react'
import BookDetailComp from '../../components/bookDetail/BookDetailComp'
import DefaultLayout from '../../layout/default/DefaultLayout';
import Cart1 from '../../components/cart/Cart1';


export default function Cart() {
  return (
    <DefaultLayout children={<Cart1/>}/>
  )
}


