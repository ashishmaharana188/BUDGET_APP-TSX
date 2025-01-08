import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../src/components/Header";

test("should render Header correctly", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Create a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});
