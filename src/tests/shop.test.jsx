import { render } from "@testing-library/react";
import { Shop } from "../components/Shop";
import { products } from "../products";

describe("Add items to cart", () => {
  let cart = [];
  function setCart(arg) {
    cart = arg;
  }
  it("render items", () => {
    const wrapper = render(
      <Shop
        productsList={products}
        shoppingCart={cart}
        setShoppingCart={setCart}
      />
    );
    expect(wrapper.getAllByText(/Description/)).toHaveLength(5);
  });
});
