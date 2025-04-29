import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import DashboardPage from "./page";

describe("Dashboard Page", () => {
  it("should render", () => {
    render(<DashboardPage />);
    screen.debug();
  });
});
