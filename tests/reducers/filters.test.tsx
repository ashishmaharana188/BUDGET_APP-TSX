import moment from "moment";
import filtersReducer from "../../src/reducers/filters";
import { describe, expect, test } from "vitest";

test("Should setup default filter value", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "",
    amount: "",
    sortOrder: "",
    startDate: null,
    endDate: null,
  });
});

test("Should setup sortBy to amount", () => {
  const state = filtersReducer(undefined, {
    type: "SORT_BY_AMOUNT",
    payload: { sortOrder: "asc" },
  });
  expect(state.sortBy).toBe("amount");
});

test("Should setup sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    amount: "",
    sortOrder: "",
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: "SORT_BY DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should setup sortBy to text", () => {
  const text = "This is my filter for text";
  const action = {
    type: "SET_TEXT_FIELD",
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Should setup sortBy to date for startDate", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("Should setup sortBy to date for endDate", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
