import { render } from "@testing-library/react";
import App from "../App";

describe("App integration", () => {
  it("Verify store header", () => {
    const wrapper = render(<App />);
    expect(wrapper.getByRole("navigation")).toBeInTheDocument();
  });

  it("Verify store footer", () => {
    const wrapper = render(<App />);
    expect(wrapper.getByText(/Created by/)).toBeInTheDocument();
  });

  it("Takes app snapshot", () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
