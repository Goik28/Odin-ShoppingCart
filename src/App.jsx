import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { products } from "./products";
import "./index.css";
import { useState } from "react";

export default function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  // add basename="/Odin-ShoppingCart/" to BrowserRouter for deployment on gh-pages.
  return (
    <BrowserRouter>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <Shop
              productsList={products}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
