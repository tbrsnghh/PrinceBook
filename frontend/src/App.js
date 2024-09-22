import Account from "./pages/account/Account";
import AdminHome from "./pages/admin/AdminHome";
import UserHome from "./pages/admin/UserHome";
import BookDetailPage from "./pages/bookDetail/BookDetailPage";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpecificCategory from "./pages/specificCategory/SpecificCategory";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/book/:id" element={<BookDetailPage />}></Route>
          <Route path="/category/:id" element={<SpecificCategory />}></Route>
          {/* //admin */}

          <Route path="/account" element={<Account />}></Route>

          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/ADMIN_User" element={<UserHome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
