import { describe, expect, test } from "vitest";
import moment from "moment";
import selectExpenses from "../../src/selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Weed",
    note: "high",
    amount: 100,
    createdDt: 0,
  },
  {
    id: "2",
    description: "Cigarette",
    note: "high",
    amount: 10,
    createdDt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Alcohol",
    note: "high",
    amount: 1000,
    createdDt: moment(0).add(4, "days").valueOf(),
  },
];

test("should filter by text value", () => {
  const filters = {
    text: "c",
    sortBy: "date",
    amount: "",
    sortOrder: "",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});
test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    amount: "",
    sortOrder: "",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});
test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    amount: "",
    sortOrder: "",
    startDate: undefined,
    endDate: moment(0).add(2, "days"),
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});
test("should filter by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    amount: "",
    sortOrder: "",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
test("should filter by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    amount: "",
    sortOrder: "",
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
