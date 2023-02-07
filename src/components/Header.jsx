import "./Header.css";
import { Link } from "react-router-dom";

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
      <div className="cart">
        <img className="cartIcon" src="/shopping-cart.png" alt="Shopping-Cart" />
        <div className="cartNotification">0</div>
      </div>
    </div>
  );
}
