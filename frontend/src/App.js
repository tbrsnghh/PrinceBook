
import Account from "./pages/account/Account";
import BookDetailPage from "./pages/bookDetail/BookDetailPage";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
