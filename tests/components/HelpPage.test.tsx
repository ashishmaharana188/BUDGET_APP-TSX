import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HelpPage from "../../src/components/HelpPage";

test("should render HelpPage", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <HelpPage />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
