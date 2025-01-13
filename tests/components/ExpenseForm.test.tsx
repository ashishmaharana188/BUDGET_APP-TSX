import React from "react";
import { test, expect } from "vitest";
<<<<<<< HEAD
import { render, screen } from "@testing-library/react";
import ExpenseForm from "../../src/components/ExpenseForm";
import { MemoryRouter } from "react-router-dom";
import expenses from "../../tests/fixtures/expense";

test("should render ExpenseForm correctly", () => {
  const { asFragment } = render(
=======
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

test("should render invalid form", async () => {
  const { getByPlaceholderText, getByText, asFragment } = render(
>>>>>>> 4bd873300fb8343676eddab1a2da3df39af88a53
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );
<<<<<<< HEAD
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
=======
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
>>>>>>> 4bd873300fb8343676eddab1a2da3df39af88a53
    <MemoryRouter>
      <ExpenseForm />
    </MemoryRouter>
  );
<<<<<<< HEAD
=======
  const descriptionField = getByPlaceholderText(/Description/i);
  const amountField = getByPlaceholderText(/Amount/i); // Replace with your actual input label

  await userEvent.type(descriptionField, "Testing_1");

  const submitButton = getByText(/Add Expense/i);
  await userEvent.click(submitButton);

  const errorMessage = getByText(/Please provide Description and Amount/i);
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

>>>>>>> 4bd873300fb8343676eddab1a2da3df39af88a53
  expect(asFragment()).toMatchSnapshot();
});
