import { useState } from "react";
import { CartItem } from "./CartItem";
import "./shoppingCart.css";

export function ShoppingCart({ shoppingCart, setShoppingCart }) {
  const [expanded, setExpanded] = useState(false);

  function expandHandler(e) {
    e.preventDefault();
    setExpanded(!expanded);
  }

  function leaveHandler(e) {
    e.preventDefault();
    setExpanded(false);
  }

  function setQuantity(product, operator) {
    const newArray = shoppingCart.concat([]);
    const productIndex = newArray.findIndex((item) => item.id == product.id);
    if (operator == "+") {
      newArray[productIndex].quantity = newArray[productIndex].quantity + 1;
      setShoppingCart(newArray);
    } else {
      newArray[productIndex].quantity = newArray[productIndex].quantity - 1;
      if (newArray[productIndex].quantity == 0) {
        newArray.splice(productIndex, 1);
      }
      setShoppingCart(newArray);
    }
  }

  function calculateCartTotal() {
    return (
      "$" +
      shoppingCart
        .reduce((total, current) => {
          return total + current.price * current.quantity;
        }, 0)
        .toFixed(2)
    );
  }

  function isExpanded() {
    if (expanded) {
      return (
        <div className="expand">
          <ul className="cartList">
            {shoppingCart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  product={item}
                  setQuantity={setQuantity}
                />
              );
            })}
          </ul>
          <p className="cartTotal">
            Cart Total:{" "}
            <span className="totalValue">{calculateCartTotal()}</span>
          </p>
          <button>Checkout</button>
        </div>
      );
    }
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
    <div className="cart" onClick={expandHandler} onMouseLeave={leaveHandler}>
      <img className="cartIcon" src="./assets/shopping-cart.png" alt="Shopping-Cart" />
      {showNotificationNumber()}
      {isExpanded()}
    </div>
  );
}
