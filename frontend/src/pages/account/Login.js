import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../store/UserSlice';
import { Button } from 'reactstrap';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export default function Login() {
  const dispatch=  useDispatch();
  const {status,message}= useSelector((state)=>state.user);
    const [userAdd, setUserAdd] = useState({});
    const handle_change =(e)=>{
        const {name,value}= e.target;
        setUserAdd({...userAdd,[name]:value});
    }
    const handle_add_user = ()=>{
       
        
        dispatch(login(userAdd));   
        
        
    }
    useEffect(() => {
     if(status && message){
       if(status==200 && message=="Login successfully"){
            window.location.href="/";
          toast.success(message);
       }else{
        toast.error(message);
       }


     }

 

    },[status,message]);
    return (
        <>
          <div className="flex justify-center items-center min-h-screen">
                    <div className="flex space-x-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                            <h2 className="text-2xl font-bold text-center mb-4">Login Form</h2>
                          <form>
                            <input type="text" placeholder="User name" className="w-full mb-4 p-2 border rounded-full"
                            onChange={handle_change}
                            value={userAdd.username}
                            name='username' />
                            <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded-full"
                              onChange={handle_change}
                              value={userAdd.password}
                              name='password' />
                            <a href="#" className="text-green-500 text-sm mb-4 block text-center">Forgot password?</a>
                            </form>
                            <Button  className="bg-green-500 text-white py-2 px-4 rounded-full w-full"  onClick={handle_add_user}>Login</Button>
                           
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                            <h2 className="text-2xl font-bold text-center mb-4">Signup Form</h2>
                           <form>
                            <input type="text"  placeholder="Email Address" className="w-full mb-4 p-2 border rounded-full"
                          />
                            <input type="password"  placeholder="Email Address" className="w-full mb-4 p-2 border rounded-full"
                              />
                            <input type="text"  placeholder="Password" className="w-full mb-4 p-2 border rounded-full"
                           />
                            <input type="text"  placeholder="Confirm password" className="w-full mb-4 p-2 border rounded-full"
                            />
                            <button className="bg-green-500 text-white py-2 px-4 rounded-full w-full" >Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}
