import { vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Shop } from "../components/Shop";
import { products } from "../products";

describe("Add items to cart", () => {
  let cart = [];
  function setCart(arg) {
    cart = arg;
  }
  const user = userEvent.setup();
  const spy = vi.spyOn(user, "click");
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
  it("Add one item to cart", async () => {
    const wrapper = render(
      <Shop
        productsList={products}
        shoppingCart={cart}
        setShoppingCart={setCart}
      />
    );
    await user.click(wrapper.getByTitle(/Add Anger/));
    expect(spy).toHaveBeenCalledOnce();
    expect(cart).toHaveLength(1);
  });
  it("Add a different item to cart", async () => {
    const wrapper = render(
      <Shop
        productsList={products}
        shoppingCart={cart}
        setShoppingCart={setCart}
      />
    );
    await user.click(wrapper.getByTitle(/Add Confusion/));
    expect(spy).toHaveBeenCalledTimes(2);
    expect(cart).toHaveLength(2);
  });
  it("Add one more of an existing item in cart", async () => {
    const wrapper = render(
      <Shop
        productsList={products}
        shoppingCart={cart}
        setShoppingCart={setCart}
      />
    );
    await user.click(wrapper.getByTitle(/Add Anger/));
    expect(spy).toHaveBeenCalledTimes(3);
    expect(cart).toHaveLength(2);
  });
});
