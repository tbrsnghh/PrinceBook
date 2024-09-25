import AddUser from "./components/admin/components/user/AddUser";
import Account from "./pages/account/Account";
import AdminHome from "./pages/admin/AdminHome";
import AddCate from "./pages/admin/Category/AddCate";
import ListCate from "./pages/admin/Category/ListCate";
import NotFound from "./pages/admin/NotFound";
import ProtectedRoute from "./pages/admin/ProtectedRoute";
import AddUserHome from "./pages/admin/user/AddUserHome";
import UserHome from "./pages/admin/user/UserHome";

import BookDetailPage from "./pages/bookDetail/BookDetailPage";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpecificCategory from "./pages/specificCategory/SpecificCategory";
import UserRestoreHome from "./pages/admin/user/UserRestoreHome";
import HomeOrder from "./pages/admin/order/HomeOrder";
import OrderDetail from "./pages/admin/order/OrderDetail";
import Checkout from "./pages/checkout/Checkout";
import MyOrder from "./pages/order/MyOrder";
import CheckoutOk from "./pages/checkoutOk/CheckoutOk";
import Results from "./pages/result/Result";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/book/:id" element={<BookDetailPage />}></Route>
          <Route path="/category/:categoryname" element={<SpecificCategory />}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="myorder" element={<MyOrder />}></Route>
          <Route path="/ok" element={<CheckoutOk />}></Route>
          <Route path="/search/:searchTerm" element={<Results />}></Route>
          {/* //admin */}
          <Route path="/notfound" element={<NotFound />}></Route>

          {/* bao ve route admin */}

          <Route path="admin/category/addDm" element={  <ProtectedRoute>{" "}<AddCate />{" "}</ProtectedRoute> } ></Route>
          <Route path="admin/category"   element={ <ProtectedRoute>  {" "}  <ListCate />{" "}  </ProtectedRoute>  } ></Route>
          <Route  path="/admin" element={  <ProtectedRoute>  {" "}  <AdminHome />{" "}  </ProtectedRoute>  }  ></Route>
          <Route path="/admin/user"  element={   <ProtectedRoute>  {" "}   <UserHome />{" "}  </ProtectedRoute>  } ></Route>
          <Route path="/admin/user/adduser" element={  <ProtectedRoute> {" "}  <AddUserHome />{" "}  </ProtectedRoute>  }  ></Route>
          <Route path="/admin/user/restore" element={  <ProtectedRoute> {" "}  <UserRestoreHome />{" "}  </ProtectedRoute>  }  ></Route>
          <Route path="/admin/order"  element={  <ProtectedRoute>  {" "}  <HomeOrder />{" "}  </ProtectedRoute>  } ></Route>
          <Route path="/admin/order/:id"  element={  <ProtectedRoute>  {" "}  <OrderDetail />{" "}  </ProtectedRoute>  } ></Route>
          {/* bao ve route admin */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
