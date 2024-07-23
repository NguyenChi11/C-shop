import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import banner_1 from "./Components/Assets/banner.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/shirt"
            element={<ShopCategory banner={banner_1} category="shirt" />}
          />
          <Route
            path="/pants"
            element={<ShopCategory banner={banner_1} category="pants" />}
          />
          <Route
            path="/set"
            element={<ShopCategory banner={banner_1} category="set" />}
          />
          <Route
            path="/accessories"
            element={<ShopCategory banner={banner_1} category="accessories" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
