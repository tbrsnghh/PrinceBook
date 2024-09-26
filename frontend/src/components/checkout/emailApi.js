// emailApi.js  

import axios from 'axios';  

export const sendOrderConfirmationEmail = async ({ email, orderDetails, totalPrice }) => {  
  try {  
    const response = await axios.post('/api/send-order-confirmation', {  
      email,  
      orderDetails,  
      totalPrice,  
    });  
    return response.data;  
  } catch (error) {  
    throw new Error('Error sending email: ' + error.message);  
  }  
};