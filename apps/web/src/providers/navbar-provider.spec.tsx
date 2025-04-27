import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { NavbarStoreProvider } from "./navbar-provider";

describe("Navbar Provider Store Component", () => {
  it("should render", () => {
    const mockChildren = <div>Mock Children</div>;
    const result = render(
      <NavbarStoreProvider>{mockChildren}</NavbarStoreProvider>
    );

    expect(
      result.container.querySelector("#navbar-provider-container")
    ).toBeTruthy();
  });

  it("should contain the children", () => {
    const mockChildren = <div>Mock Children</div>;
    render(<NavbarStoreProvider>{mockChildren}</NavbarStoreProvider>);

    expect(screen.getByText("Mock Children")).toBeTruthy();
  });
});
