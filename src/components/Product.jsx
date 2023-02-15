import "./product.css";

export function Product({ product, addProductToCart }) {
  function addHandler() {
    addProductToCart(product);
  }

  function formatPrice(price) {
    if (price == 0) {
      return "IT'S FREE!";
    } else {
      return "$" + parseFloat(price).toFixed(2);
    }
  }

  return (
    <div className="productListing">
      <img src={product.src} alt={product.alt} />
      <p className="name">
        {product.name.toUpperCase()} - <span>{formatPrice(product.price)}</span>
      </p>
      <p className="description">{product.description}</p>
      <button onClick={addHandler}>ADD TO CART</button>
    </div>
  );
}
