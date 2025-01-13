import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ExpenseForm from "../../src/components/ExpenseForm";
import { MemoryRouter } from "react-router-dom";
import expenses from "../../tests/fixtures/expense";

test("should render ExpenseForm correctly", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("should render one Expense correctly", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <ExpenseForm expense={expenses[0]} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("should render error with expense data", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
