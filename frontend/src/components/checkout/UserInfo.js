import React from "react";  

export default function UserInfo({ order, note, setNote,   
    shipping_address, setShippingAddress, paymentMethod, setPaymentMethod }) {  

    const handleShippingAddressChange = (e) => {  
        setShippingAddress(e.target.value);  
    }  

    const handleNoteChange = (e) => {  
        setNote(e.target.value);  
    }  

    const handlePaymentMethodChange = (e) => {  
        setPaymentMethod(e.target.value);  
    }  

    return (  
        <div className="w-full md:w-1/2 mx-auto bg-white rounded-lg p-6 border border-gray-300"> {/* Added border */}  
            <h2 className="text-2xl font-bold mb-4">Deliver to</h2>  
            <div className="mb-4">  
                <p className="text-lg font-semibold">{order.username}</p>  
                <p className="text-gray-600">{order.phone_number}</p>  
                <p className="text-gray-600">{order.address}</p>  
            </div>  
            <div className="mb-4 border-t border-gray-300 pt-4"> {/* Added top border and padding */}  
                <label className="block text-gray-700 text-sm font-bold mb-2">  
                    Shipping Address  
                </label>  
                <input  
                    type="text"  
                    className="appearance-none w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"  
                    placeholder="Shipping address"  
                    value={shipping_address}  
                    onChange={handleShippingAddressChange}  
                />  
            </div>  
            <div className="mb-4 border-t border-gray-300 pt-4"> {/* Added top border and padding */}  
                <label className="block text-gray-700 text-sm font-bold mb-2">  
                    Note  
                </label>  
                <textarea  
                    style={{ resize: 'none' }}  
                    className="appearance-none w-full px-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"  
                    placeholder="Note"  
                    value={note}  
                    onChange={handleNoteChange}  
                    rows="5"  
                />  
            </div>  
            <div className="mb-4 border-t border-gray-300 pt-4"> {/* Added top border and padding */}  
                <span className="block text-gray-700 text-sm font-bold mb-2">  
                    Payment Method  
                </span>  
                <div className="flex flex-col">  
                    <label className="inline-flex items-center mt-2">  
                        <input   
                            type="radio"   
                            value="credit"   
                            checked={paymentMethod === "credit"}   
                            onChange={handlePaymentMethodChange}   
                            className="form-radio h-5 w-5 text-blue-600"  
                            disabled  
                        />  
                        <span className="ml-2">Credit Card (No support)</span>  
                    </label>  
                    <label className="inline-flex items-center mt-2">  
                        <input   
                            type="radio"   
                            value="paypal"   
                            checked={paymentMethod === "paypal"}   
                            onChange={handlePaymentMethodChange}   
                            className="form-radio h-5 w-5 text-blue-600"  
                            disabled  
                        />  
                        <span className="ml-2">PayPal (No support)</span>  
                    </label>  
                    <label className="inline-flex items-center mt-2">  
                        <input   
                            type="radio"   
                            value="cash"   
                            checked={paymentMethod === "cash"}   
                            onChange={handlePaymentMethodChange}   
                            className="form-radio h-5 w-5 text-blue-600"  
                        />  
                        <span className="ml-2">Cash on Delivery</span>  
                    </label>  
                </div>  
            </div>  
        </div>  
    );  
}