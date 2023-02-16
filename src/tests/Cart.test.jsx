import { vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import React from "react";

describe("Tries to buy an item", () => {
  const user = userEvent.setup();
  const spy = vi.spyOn(user, "click");
  beforeEach(() => {
    render(<App />);
  });
  it("Add an item to cart", async () => {
    await user.click(screen.getAllByTitle(/Go to our products page/)[0]);
    await user.click(screen.getByTitle(/Add Anger/));
    expect(screen.getByTitle(/Number of items on cart/).textContent).toBe("1");
  });
  it("Changes the item amount in the cart", () => {
    act( async () => {
       await user.click(screen.getAllByTitle(/Go to our products page/)[0]);
       await user.click(screen.getByTitle(/Add Anger/));
       await user.click(screen.getByTitle(/Shopping cart/));
       await user.click(screen.getByTitle(/Add one/));
      expect(screen.getByTitle(/Quantity/).textContent).toBe("2");
    });
  });
});
