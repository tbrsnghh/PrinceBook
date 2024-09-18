import React, { useState } from 'react'

export default function Dm() {
  const [openMenu, setOpenMenu] = useState(null);

  // Function to toggle the menu-open class
  const toggleMenu = (menuId) => {
    if (openMenu === menuId) {
      setOpenMenu(null); // Close the menu if it's already open
    } else {
      setOpenMenu(menuId); // Open the clicked menu
    }
  };
  return (
    <>
      {/* map du lieu */}

      <tr >
        <th scope="row">
          1
        </th>
        <td>
          Mark
        </td>
        
        <td>
          @mdo
        </td>
        <td>
          <button className='btn btn-primary' onClick={() => toggleMenu(1)}>sửa</button>
          |
          <button className='btn btn-danger'>xóa</button>
        </td>
      </tr>


      <tr className={openMenu == 1 ? " bg-info bg-gradient" : "hidden"} >
        <th scope="row">
          1
        </th>
        <td>
          <input type="text" className='text-dark' value={"Mark"} />
        </td>
        <td>
          <input type="text" className='text-dark' value={"Mark"} />
        </td>
        <td>
          <input type="text" className='text-dark' value={"Mark"} />
        </td>
        <td>
          <input type="text" className='text-dark' value={"Mark"} />
        </td>
        <td>
          <button className='btn btn-primary' onClick={() => toggleMenu(1)}>sửa</button>
        
        </td>
      </tr>


   
    </>
  )
}
