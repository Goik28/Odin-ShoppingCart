import "./Product.css";

export function Product({ product }) {
  return (
    <div className="productListing">
      <img src={product.src} alt={product.alt} />
      <p className="name">
        {product.name.toUpperCase()} - <span>{product.price}</span>
      </p>      
      <p className="description">{product.description}</p>
      <button>ADD TO CART</button>
    </div>
  );
}
