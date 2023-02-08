import "./Header.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";

export function Header() {
  return (
    <div className="navHeader">
      <header>
        <div className="storeName">ANOTHER</div>
        <div className="subName">fake store</div>
      </header>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </nav>
      <ShoppingCart shoppingCart={[]}/>
    </div>
  );
}
