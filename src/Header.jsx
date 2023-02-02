import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="storeName">
        <div>ANOTHER</div>
        <div>fake store</div>
      </div>
      <div className="nav">
        <a href="/">HOME</a>
        <a href="/products">PRODUCTS</a>
      </div>
      <div className="cart">
        <div className="cartIcon"></div>
        <div className="cartNotification"></div>
      </div>
    </header>
  );
}
