import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NotFoundPage from "../../src/components/NotFoundPage";

test("should render notFoundPage", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
