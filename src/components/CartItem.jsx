import "./cartItem.css";

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
          <button
            title="Reduce one of this item"
            onClick={quantityHandler}
            value={"-"}
          >
            -
          </button>
          <p title="Quantity">{product.quantity}</p>
          <button
            title="Add one of this item"
            onClick={quantityHandler}
            value={"+"}
          >
            +
          </button>
        </div>
        <p>Item total: ${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}
