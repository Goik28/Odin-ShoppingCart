import "./Header.css";

export function Header() {
  return (
    <div className="navHeader">
      <header>
        <div className="storeName">ANOTHER</div>
        <div className="subName">fake store</div>
      </header>
      <nav>
        <a href="/">HOME</a>
        <a href="/products">PRODUCTS</a>
      </nav>
      <div className="cart">
        <div className="cartIcon">C</div>
        <div className="cartNotification">0</div>
      </div>
    </div>
  );
}
