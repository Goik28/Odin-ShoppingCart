import { Product } from "./Product";
import "./Shop.css";

export function Shop({ productsList, shoppingCart, setShoppingCart }) {
  return (
    <main className="shopList">
      <p className="shopPitch">
        Wanna change how are you feeling? Try one of our products!
      </p>
      <div className="clipPath"></div>
      <ul>
        {productsList.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </ul>
    </main>
  );
}
