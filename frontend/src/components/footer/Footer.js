import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  
import './footer.scss'
export default function Footer() {
  return (
    <footer className="border-t border-gray-300   pt-10 pb-5 ">  
    <div className="container mx-auto px-4">  
        <div className="flex flex-wrap justify-between">  
            {/* About Section */}  
            <div className="w-full md:w-1/4 mb-4">  
                <h3 className="text-lg font-bold mb-2">About Us</h3>  
                <p className="text-sm pr-4">  
                  Prince Books là nền tảng thương mại sách trực tuyến. Chúng tôi luôn mong muốn đem đến cho độc giả
                  những cuốn sách chất lượng thật tiện lợi và nhanh chóng.
                </p>  
            </div>  

            {/* Quick Links */}  
            <div className="w-full md:w-1/4 mb-4">  
                <h3 className="text-lg font-bold mb-2">Quick Links</h3>  
                <ul>  
                    <li><a href="#" className="text-sm hover:underline">Home</a></li>  
                    <li><a href="#" className="text-sm hover:underline">About</a></li>  
                    <li><a href="#" className="text-sm hover:underline">Products</a></li>  
                    <li><a href="#" className="text-sm hover:underline">Contact</a></li>  
                </ul>  
            </div>  

            {/* Social Media Section */}  
            <div className="w-full md:w-1/4 mb-4">  
                <h3 className="text-lg font-bold mb-2">Follow Us</h3>  
                <div className="flex space-x-4">  
                    <a href="#" className="text-sm hover:text-gray-400"><FaFacebookF /></a>  
                    <a href="#" className="text-sm hover:text-gray-400"><FaTwitter /></a>  
                    <a href="#" className="text-sm hover:text-gray-400"><FaInstagram /></a>  
                    <a href="#" className="text-sm hover:text-gray-400"><FaLinkedinIn /></a>  
                </div>  
            </div>  

            {/* Newsletter Section */}  
            <div className="w-full md:w-1/4 mb-4">  
                <h3 className="text-lg font-bold mb-2">Newsletter</h3>  
                <p className="text-sm">Subscribe to our newsletter for updates and promotions.</p>  
                <form className="flex mt-2">  
                    <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg border border-gray-600 w-full" />  
                    <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600">Subscribe</button>  
                </form>  
            </div>  
        </div>  
    </div>  
    <div className="allrights py-4">  
        <div className="container mx-auto text-center">  
            <p className="text-sm">© 2023 Prince Books. All rights reserved.</p>  
        </div>  
    </div>  
</footer> 
  )
}