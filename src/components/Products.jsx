import { Product } from "./Product";
import "./Products.css";

export function Products({ productsList }) {
  return (
    <main className="productsList">
      <p className="productsPitch">
        Wanna change how are you feeling? Try one of our products!
      </p>
      <div className="clipPath"></div>
      <ul>
        {productsList.map((product, index) => {
          return <Product key={index} product={product}></Product>;
        })}
      </ul>
    </main>
  );
}
