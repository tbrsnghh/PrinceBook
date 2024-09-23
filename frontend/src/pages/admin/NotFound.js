import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {


    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5); // Thời gian đếm ngược ban đầu là 5 giây

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000); // Giảm 1 giây sau mỗi lần lặp

        const timeout = setTimeout(() => {
            navigate("/");
        }, 5000); // Sau 5 giây sẽ điều hướng về trang chủ

        return () => {
            clearInterval(timer); // Dọn dẹp bộ đếm thời gian
            clearTimeout(timeout); // Dọn dẹp timeout
        };
    }, [navigate]);

    return (


        <>


            <div className="flex justify-center mt-10 min-h-screen w-full">
                          
                <div>
                    <img className='mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1f11NPYQx550Vc0MQfDFmHhbLLM6VMQuO7A&s'/>
                    <h1>Bạn không có quyền truy cập trang này</h1>
                    <p>Bạn sẽ được chuyển về trang chủ sau {countdown} giây...</p>
                </div>
            </div>
        </>
    )
}
