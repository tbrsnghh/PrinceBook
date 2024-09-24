import React, { useState } from 'react'
import logo from "../../../asset/img/logo.png";
import { Link } from 'react-router-dom';

export default function Header() {

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

      <nav class="main-header navbar navbar-expand navbar-white navbar-light w-10/12 fixed-top">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="index3.html" class="nav-link">Home</a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>


        <form class="form-inline ml-3">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"> </i>
              </button>
            </div>
          </div>
        </form>


        <ul class="navbar-nav ml-auto">

          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-comments"></i>
              <span class="badge badge-danger navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" class="dropdown-item">

                <div class="media">
                  <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">Call me whenever you can...</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>

              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">

                <div class="media">
                  <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      John Pierce
                      <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">I got your message bro</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>

              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">

                <div class="media">
                  <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Nora Silvester
                      <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">The subject goes here</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div>

              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-bell"></i>
              <span class="badge badge-warning navbar-badge">15</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span class="dropdown-item dropdown-header">15 Notifications</span>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i> 4 new messages
                <span class="float-right text-muted text-sm">3 mins</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
                <span class="float-right text-muted text-sm">12 hours</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-file mr-2"></i> 3 new reports
                <span class="float-right text-muted text-sm">2 days</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i
              class="fas fa-th-large"></i></a>
          </li>
        </ul>
      </nav>


      <aside class="main-sidebar sidebar-dark-primary elevation-4">




        <div class="sidebar">

          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
              <img src={logo} class="img-circle elevation-2" alt="User Image" />
            </div>
            <div class="info">
              <a href="#" class="d-block">Admin</a>
            </div>
          </div>


          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


              <li className={`nav-item has-treeview ${openMenu === 1 ? 'menu-open' : ''}`}>
                <a href="#" class="nav-link" onClick={() => toggleMenu(1)}>
                  <i class="nav-icon fas fa-copy"></i>
                  <p>
                    Danh mục
                    <i class="fas fa-angle-left right"></i>
                    <span class="badge badge-info right">6</span>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Thêm Danh mục </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/layout/fixed-topnav.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Sửa Danh mục </p>
                    </a>
                  </li>

                </ul>
              </li>

              <li className={`nav-item has-treeview ${openMenu === 2 ? 'menu-open' : ''}`}>
                <Link  class="nav-link" onClick={() => toggleMenu(2)}>
                  <i class="nav-icon fas fa-tree"></i>
                  <p>
                    User
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to={"/admin/user/restore"} class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Restore</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/admin/user"} class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>List User</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to={"/admin/user/adduser"} class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Add new User</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nav-item has-treeview ${openMenu === 3 ? 'menu-open' : ''}`}>
                <a href="#" class="nav-link" onClick={() => toggleMenu(3)}>
                  <i class="nav-icon fas fa-edit"></i>
                  <p>
                    Sản phẩm
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/forms/advanced.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/forms/editors.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Editors</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/forms/validation.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item has-treeview ${openMenu === 4 ? 'menu-open' : ''}`}>
                <a href="#" class="nav-link"  onClick={() => toggleMenu(4)}>
                  <i class="nav-icon fas fa-table"></i>
                  <p>
                    Order
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <Link to={'/admin/order'} class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>List order </p>
                    </Link>
                  </li>
                 
                </ul>
              </li>

            </ul>
          </nav>

        </div>

      </aside>




    </>
  )
}
