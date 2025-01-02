import moment from "moment";
import filtersReducer from "../../src/reducers/filters";
import { describe, expect, test } from "vitest";

test("Should setup default filter value", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "",
    startDate: null,
    endDate: null,
  });
});

test("Should setup sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should setup sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: "SORT_BY DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});
