import { useState } from "react";
import { CartItem } from "./CartItem";
import "./ShoppingCart.css";

export function ShoppingCart({ shoppingCart }) {
  const [expanded, setExpanded] = useState(false);

  function isExpanded() {
    return (
      <div>
        <ul>
          {shoppingCart.map((item) => {
            return (
              <CartItem
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            );
          })}
        </ul>
        <button>Checkout</button>
      </div>
    );
  }

  function showNotificationNumber() {
    if (shoppingCart.length > 0) {
      return (
        <div className="cartNotification">
          {shoppingCart.length > 9 ? "9+" : shoppingCart.length}
        </div>
      );
    }
  }

  return (
    <div className="cart">
      <img className="cartIcon" src="/shopping-cart.png" alt="Shopping-Cart" />
      {showNotificationNumber()}
    </div>
  );
}
