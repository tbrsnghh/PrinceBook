import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Login from './Login'
import Profile from './Profile'

export default function Account() {
  return (
    <>
        <Header/>
{
  (localStorage.getItem('user')) 
  ?
<Profile/>
  :
  <Login/>
}     
    </>
  )
}
