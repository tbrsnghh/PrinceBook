import React from "react";  
import { ReactComponent as CapybaraIcon } from "../../asset/img/littleprince.svg"; // Nếu bạn muốn dùng icon  

export default function OK() {  
  return (  
    <div className="h-screen flex justify-center items-center relative">  
      <div className="text-center relative z-10 mt-4"> {/* Dịch lên với margin-top của Tailwind */}  
        <div className="text-green-600 text-4xl font-bold mb-4">  
          Đặt hàng thành công!  
        </div>  
        <p className="text-gray-700 text-lg mb-6">  
          Cảm ơn bạn đã mua hàng tại Prince Books. Đơn hàng của bạn đã được đặt  
          thành công và sẽ sớm được giao.  
        </p>  
        
        <a  
          href="/"  
          className="inline-block bg-gray-950 hover:bg-white hover:text-black hover:border-black text-white font-semibold py-2 px-6 rounded border"  
        >  
          Tiếp tục mua sắm  
        </a>  
      </div>  

      {/* Background image */}  
      <div  
        className="absolute inset-0 bottom-0 left-0 right-0 h-full bg-no-repeat bg-center bg-cover"  
        style={{  
          backgroundImage: `url(${require("../../asset/img/removebg.png")})`,  
          opacity: 0.1,  
          backgroundPosition: 'center 10%',  
        }}  
      ></div>  
    </div>  
  );  
}