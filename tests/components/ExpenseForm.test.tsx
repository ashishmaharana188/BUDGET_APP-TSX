import React from "react";
import { test, expect } from "vitest";
import {
  render,
  fireEvent,
  getByLabelText,
  getByPlaceholderText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ExpenseForm from "../../src/components/ExpenseForm";
import { addExpense } from "./../../src/actions/expenses";
import expenses from "../../tests/fixtures/expense";

test("should render invalid form", async () => {
  const { getByPlaceholderText, getByText, asFragment } = render(
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

test("should render error with expense data", async () => {
  const { asFragment, getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );
  const descriptionField = getByPlaceholderText(/Description/i);
  const amountField = getByPlaceholderText(/Amount/i); // Replace with your actual input label

  const submitButton = getByText(/Add Expense/i);

  await userEvent.click(submitButton);

  const errorMessage = getByText(/Please provide Description and Amount/i);
  expect(errorMessage).to.exist;

  expect(asFragment()).toMatchSnapshot();
});

test("should render description properly with error for amount", async () => {
  const { getByPlaceholderText, getByText, asFragment } = render(
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );

  const descriptionField = getByPlaceholderText(/Description/i);
  const amountField = getByPlaceholderText(/Amount/i); // Replace with your actual input label

  await userEvent.type(descriptionField, "Testing_1");

  const submitButton = getByText(/Add Expense/i);
  await userEvent.click(submitButton);

  const errorMessage = getByText(/Please provide an Amount./i);
  expect(errorMessage).to.exist;

  expect(asFragment()).toMatchSnapshot();
});

test("should render description properly with no error", async () => {
  const { getByPlaceholderText, getByText, asFragment } = render(
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );
  const descriptionField = getByPlaceholderText(/Description/i);
  const amountField = getByPlaceholderText(/Amount/i); // Replace with your actual input label

  await userEvent.type(descriptionField, "Testing_1");
  await userEvent.type(amountField, "1000");

  const submitButton = getByText(/Add Expense/i);
  await userEvent.click(submitButton);

  expect(asFragment()).toMatchSnapshot();
});

test("should render notes properly with error", async () => {
  const { getByPlaceholderText, getByText, asFragment } = render(
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );
  const noteField = getByPlaceholderText(/Note/i);

  await userEvent.type(noteField, "Testing_note");

  const submitButton = getByText(/Add Expense/i);
  await userEvent.click(submitButton);

  const errorMessage = getByText(/Please provide Description and Amount/i);
  expect(errorMessage).to.exist;

  expect(asFragment()).toMatchSnapshot();
});
