import React, { useEffect, useState } from 'react'
import Header from '../../../components/admin/components/Header'
import Dasborad from '../../../components/admin/components/Dasborad'
import Footer from '../../../components/admin/components/Footer'
import { Table } from 'reactstrap'
import axios from 'axios'
import { CSVLink } from 'react-csv'

export default function ListProduct() {

    const [data, setData] = useState([]);

    const url = 'http://localhost:8080/api/book'
    const fetchdata = async () => {
            try{
                const response = await axios.get(url);
                setData(response.data.data);
            }
            catch(error){
                console.log(error);
            }
    }
    useEffect(()=>{
        fetchdata();
    },[])

    const headers = [
        { label: 'name', key: 'name' },
        { label: 'another', key: 'another' },
        { label: 'price', key: 'price' },
        { label: 'category', key: 'category' },
        { label: 'language', key: 'language' },
        { label: 'publisher', key: 'publisher' },
    
    ];
    const csvData = data.map((item) => ({
        name: item.name,
        another: item.another,
        price: item.price,
        category: item.category,
        language: item.language,
        publisher: item.publisher
    }));
    return (
        <>

            <Header />

            <Dasborad />




            <div class="content-wrapper">


                <div class="card card-primary mx-3">
             
                    <div class="card-header">
                        <h3 class="card-title">List Products</h3> 
                        <CSVLink
                        data={csvData} headers={headers}  className='btn btn-success float-right'>
                          excel
                        </CSVLink>
                    </div>
                    
                <Table
>
  <thead>
    <tr>
      <th >
        #
      </th>
      <th className='w-25'>
       name
      </th>
      <th className=' w-25'>
    another
      </th>
      <th>
     price 
      </th>
      <th>
   category
      </th>
      <th>
 language
      </th>
      <th className='w-20'>
      publisher
      </th>
    </tr>
  </thead>
  <tbody>

    {
        data && data.map((item, index) => (

            <tr key={index}>
      <th scope="row">
        1
      </th>
      <td>
       {item.name}
      </td>
      <td className='d-flex align-items-center'>
     
       <p>{item.author}</p>
      </td>
      <td>
       {item.price} 
      </td>
      <td>
      {item.category.name} 
      </td>
      <td>
       {item.language} 
      </td>
      <td>
      {item.publisher}
      </td>
    </tr>
    ))
}
    
  
   
  </tbody>
</Table>

                </div>
               
            </div>
            <Footer />
        </>
    )
}
