import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteMUser, ListUser, restoreUser } from '../../../../store/UserSlice';
import { Button } from 'reactstrap';

export default function Users() {
  const [openMenu, setOpenMenu] = useState(null);

  const dispatch = useDispatch();
  // Function to toggle the menu-open class
  const toggleMenu = (menuId) => {
    if (openMenu === menuId) {
      setOpenMenu(null); // Close the menu if it's already open
    } else {
      setOpenMenu(menuId); // Open the clicked menu
    }
  };
  useEffect(() => {
    dispatch(ListUser())
  }, []);
  const { listUser } = useSelector((state) => state.user);
  console.log(listUser);
  const listUserArray = Array.isArray(listUser) ? listUser : [];
  console.log(listUserArray);



  const handle_delete = (id) => {
    dispatch(deleteMUser(id));
  }
  return (
    <>
      {
        listUserArray.map((user, index) => (
          <><tr key={index}>

            <td>
              {user.username}
            </td>
            <td>
              {user.phone}
            </td>
            <td>
              {user.address}
            </td>
            <td>
              {user.gmail}
            </td>
            <td>
              {user.role}
            </td>
            <td>
              <button className='btn btn-primary' onClick={() => toggleMenu(index)}>edit</button>
              |
              <Button className='btn btn-danger' onClick={() => handle_delete(user.id)}>delete</Button>
            </td>
          </tr>
            <tr className={openMenu == index ? "border-t-0 border-double border-4 border-sky-500" : "hidden"}>

              <td>
                <input type="text" className='text-dark' value={user.username} />
              </td>
              <td>
                <input type="text" className='text-dark' value={user.phone} />
              </td>
              <td>
                <input type="text" className='text-dark' value={user.address} />
              </td>
              <td>
                <input type="text" className='text-dark' value={user.gmail} />
              </td>
              <td>
                <input type="text" className='text-dark' value={user.role} />
              </td>
              <td>
                <button className='btn btn-primary' onClick={() => toggleMenu(index)}>sua</button>

              </td>
            </tr></>
        ))
      }








    </>
  )
}
