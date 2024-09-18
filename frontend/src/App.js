import Banner from "./components/banner/BannerTest";
import Header from "./components/header/Header";
import Account from "./pages/account/Account";
import BookDetailPage from "./pages/bookDetail/BookDetailPage";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Header from "./components/admin/components/Header";
import Dasborad from "./components/admin/components/Dasborad"
import Home from "./components/admin/components/Home";
import ListUser from "./components/admin/components/DanhMuc/ListDm";
import AddUsera from "./components/admin/components/DanhMuc/ListDm";
import Footer from "./components/admin/components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/account" element={<Account/>}></Route>

          <Route path="/book/:id" element={<BookDetailPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
