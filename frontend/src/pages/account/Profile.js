import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap'
import { List, ListRetore } from '../../store/UserSlice';

export default function Profile() {

    const user = JSON.parse(localStorage.getItem('user'));
 const dispatch = useDispatch();

const test =()=>{
    dispatch(ListRetore());
 
    
}

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
   <>
    <Container>
<Button onClick={test}>test</Button>

    <div className="flex justify-center items-center min-h-screen w-full">
                    <div className="bg-white p-2 rounded-lg shadow-md w-full max-w-lg">
                        <h2 className="text-xl font-semibold mb-6">Thông tin người dùng</h2>
                        <form>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Username: {user.username}</label>
                               
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Address</label>
                                <div className="flex space-x-4">
                                 
                                    <input type="text" className="w-2/3 p-2 border border-gray-300 rounded" value={user.address} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Password</label>
                                <div className="flex space-x-4">
                                 
                                    <input type="password" className="w-2/3 p-2 border border-gray-300 rounded"  />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Gmail</label>
                                <div className="flex space-x-4">
                                 
                                    <input type="text" className="w-2/3 p-2 border border-gray-300 rounded" value={user.gmail} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Phone</label>
                                <div className="flex space-x-4">
                                 
                                    <input type="text" className="w-2/3 p-2 border border-gray-300 rounded" value={user.phone} />
                                </div>
                            </div>
                            
                           
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Note</label>
                                <input type="date" className="w-1/3 p-2 border border-gray-300 rounded"  value={user.ngay_sinh} />
                            </div>
                            <button type="button" className="w-full bg-black text-white p-2 rounded flex items-center justify-center">
                                <span>Save changes</span>
                                <i className="fas fa-lock ml-2"></i>
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                       
<Button className=" bg-black text-white p-2 rounded flex items-center justify-center" onClick={() => logout()}>Logout</Button>
                        </div>
                    </div>
                 
                </div>





    </Container>

   
   </>
  )
}
