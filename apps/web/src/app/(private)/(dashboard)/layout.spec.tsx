import { describe, it, expect } from "@jest/globals";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import DashboardLayout from "./layout";
import React from "react";

jest.mock("../../../components/navbar/navbar", () => ({
  Navbar: () =>
    React.createElement("div", { "data-testid": "navbar" }, "Mock Navbar"),
}));

describe("DashboardLayout", () => {
  it("should render the layout with children", () => {
    const mockChildren = <div>Mock Children</div>;
    render(<DashboardLayout>{mockChildren}</DashboardLayout>);

    const layout = screen.getByTestId("dashboard-layout");
    expect(layout).toBeInTheDocument();
  });
});
