export function CartItem({ product, quantity, setQuantity }) {
  return (
    <div>
      <img src={product.src} alt={product.alt} />
      <div>
        <p className="name">{product.name.toUpperCase()}</p>
        <div>
          <button onClick={setQuantity("-")}>-</button>
          <p>{quantity}</p>
          <button onClick={setQuantity("+")}>+</button>
        </div>
        <p>Item total: {Number.parseInt(product.price) * quantity}</p>
      </div>
    </div>
  );
}
