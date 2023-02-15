import { Product } from "./Product";
import "./shop.css";

export function Shop({ productsList, shoppingCart, setShoppingCart }) {
  function addProductToCart(product) {
    const cartItem = { ...product, quantity: 1 };
    if (shoppingCart.some((item) => item.id == cartItem.id)) {
      const newArray = shoppingCart.concat([]);
      newArray.find((item) => item.id == cartItem.id).quantity =
        newArray.find((item) => item.id == cartItem.id).quantity + 1;
      setShoppingCart(newArray);
    } else {
      setShoppingCart(shoppingCart.concat(cartItem));
    }
  }

  return (
    <main className="shopList">
      <p className="shopPitch">
        Wanna change how are you feeling? Try one of our products!
      </p>
      <div className="clipPath"></div>
      <ul>
        {productsList.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              addProductToCart={addProductToCart}
            ></Product>
          );
        })}
      </ul>
    </main>
  );
}
