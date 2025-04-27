import { describe, it, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { FontProvider } from "./font-provider";

describe("Font Provider Component", () => {
  it("should render", () => {
    const mockChildren = <div>Mock Children</div>;
    render(<FontProvider children={mockChildren} />);

    screen.debug();
  });

  it("should contain the children", () => {
    const mockChildren = <div>Mock Children</div>;
    render(<FontProvider children={mockChildren} />);

    expect(screen.getByText("Mock Children")).toBeTruthy();
  });
});
