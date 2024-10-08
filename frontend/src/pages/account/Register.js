import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'reactstrap'
import { register } from '../../store/UserSlice';
import { toast, ToastContainer } from 'react-toastify';

export default function Register() {
const [userRes, setUserRes] = useState({
    
});
const dispatch = useDispatch();
const { status, message } = useSelector((state) => state.user);
const handle_change = (e) => {
  const { name, value } = e.target;
  setUserRes({ ...userRes, [name]: value });
};
const handle_signup = () => {
 
    
  dispatch(register(userRes));
}
useEffect(() => {

    
  if (status && message) {
    if (status == 200 && message) {

    toast.success(message);
    } else {
      toast.error(message);
    }
  }
}, [status, message]);
  return (
   <>

   <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-bold text-center mb-4">Signup Form</h2>
            <form>
              <input type="text" placeholder="ten dang nhap" className="w-full mb-4 p-2 border rounded-full bg-gray-100"
              name='username'
              value={userRes.username}
              onChange={handle_change}
              />
              <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded-full bg-gray-100"
              name='password'
                value={userRes.password}
                onChange={handle_change}
              />
              <input type="text" placeholder="Email Address" className="w-full mb-4 p-2 border rounded-full bg-gray-100"
              name='gmail'
                value={userRes.gmail}
                onChange={handle_change}

              />
              <input type="text" placeholder="phone" className="w-full mb-4 p-2 border rounded-full bg-gray-100"
              name='phone'
                value={userRes.phone}
                onChange={handle_change}
              />
                <Input type="date" placeholder="data" className="w-full mb-4 p-2 border rounded-full bg-gray-100"
              name='ngay_sinh'
                value={userRes.ngay_sinh}
                onChange={handle_change}
              />
              <Button className="bg-green-500 text-white py-2 px-4 rounded-full w-full" onClick={handle_signup} >Signup</Button>
            </form>
          </div>
   
   </>
  )
}
