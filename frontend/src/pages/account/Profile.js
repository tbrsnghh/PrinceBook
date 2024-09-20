import React from 'react'
import { Navigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap'

export default function Profile() {

    const user = JSON.parse(localStorage.getItem('user'));




    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
   <>
    <Container>
    <h1>Thông tin người dùng </h1>

    <div className='mt-20'>
        <h3 className=''>Họ tên : {user.username}</h3> 
        <h3 className=''>gmail : {user.gmail}</h3> 
        <h3 className=''>phone : {user.phone}</h3> 
        <h3 className=''>ngay Sinh : {user.ngay_sinh}</h3> 


<Button onClick={() => logout()}>Logout</Button>
    </div>


    </Container>

   
   </>
  )
}
