import React from 'react';  

export default function DetailInfo({ book }) {  
    const {  
        name,  
        imagePath,  
        author,  
        publisher,  
        publishedDate,  
        pages,  
        language,  
        price,  
        category: { name: categoryName },  
    } = book;  

    const details = [  
        { label: 'Tên sách', value: name },  
          
        { label: 'Tác giả', value: author },  
        { label: 'Thể loại', value: categoryName },
        { label: 'Công ty phát hành', value: publisher },  
        { label: 'Số trang', value: pages },  
        { label: 'Năm xuất bản', value: new Date(publishedDate).getFullYear().toString() }, 
        { label: 'Ngôn ngữ', value: language },  
    ];  

    return (  
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">  
            <h2 className="font-bold text-lg mb-2">Thông tin chi tiết</h2>  
            <table className="w-full">  
                <tbody>  
                    {details.map((detail, index) => (  
                        <tr className="py-4 border-b" key={index}>  
                            <td className="text-gray-600 w-2/5">{detail.label}</td>  
                            <td className="text-black-500">{detail.value}</td>  
                        </tr>  
                    ))}  
                </tbody>  
            </table>  
        </div>  
    );  
}