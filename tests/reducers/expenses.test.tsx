import moment from "moment";
import filtersReducer from "../../src/reducers/expenses";
import expenseReducer from "../../src/reducers/expenses";
import fixtureExpense from "../../tests/fixtures/expense";
import { describe, expect, test } from "vitest";

test("Should setup default filter state", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should setup Remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: fixtureExpense[1].id,
  };
  const state = expenseReducer(fixtureExpense, action);
  expect(state).toEqual([fixtureExpense[0], fixtureExpense[2]]);
});

test("Should not setup remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expenseReducer(fixtureExpense, action);
  expect(state).toEqual(fixtureExpense);
});

test("Should setup add expense", () => {
  const expense = {
    id: "4",
    description: "Detox",
    note: "No Nicotine",
    amount: -100,
    createdDt: 0,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expenseReducer(fixtureExpense, action);
  expect(state).toEqual([...fixtureExpense, expense]);
});

test("Should setup edit expense", () => {
  const amount = 200;
  const action = {
    type: "EDIT_EXPENSE",
    id: fixtureExpense[1].id,
    updates: { amount },
  };
  const state = expenseReducer(fixtureExpense, action);
  expect(state[1].amount).toBe(amount);
});

test("Should setup not edit expense", () => {
  const amount = 200;
  const action = {
    type: "EDIT_EXPENSE",
    id: "4",
    updates: { amount },
  };
  const state = expenseReducer(fixtureExpense, action);
  expect(state).toEqual(fixtureExpense);
});
