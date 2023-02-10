import "./CartItem.css";

export function CartItem({ product, setQuantity }) {
  function quantityHandler(e) {
    e.stopPropagation();
    setQuantity(product, e.target.value);
  }

  return (
    <div className="cartItem">
      <img src={product.src} alt={product.alt} />
      <div className="cartItemInfo">
        <p className="name">{product.name.toUpperCase()}</p>
        <div className="cartItemControl">
          <button onClick={quantityHandler} value={"-"}>
            -
          </button>
          <p>{product.quantity}</p>
          <button onClick={quantityHandler} value={"+"}>
            +
          </button>
        </div>
        <p>Item total: ${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}
