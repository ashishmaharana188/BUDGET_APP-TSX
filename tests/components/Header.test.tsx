import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../src/components/Header";

test("should render Header correctly", () => {
  const { asFragment, getAllByRole } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  // Create a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();

  const h1Elements = getAllByRole("heading", { level: 1 });
  expect(h1Elements.length).toBe(1);
});
