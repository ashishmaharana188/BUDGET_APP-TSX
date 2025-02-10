import moment from "moment";

// SET_TEXT_FILTER
export const setTextFilter = (text: string = "") => ({
  type: "SET_TEXT_FIELD",
  text,
});
export const setAmountFilter = (amount: string = "") => ({
  type: "SET_AMOUNT_FIELD",
  amount,
});
// SORT_BY_AMOUNT
export const sortByAmount = (sortOrder: "asc" | "desc" | null) => ({
  type: "SORT_BY_AMOUNT",
  payload: { sortOrder },
});
export const setSortBy = (sortBy: "date" | "amount" | null) => ({
  type: "SET_SORT_BY",
  sortBy,
});
// SORT_BY_DATE
export const sortByDate = (sortOrder: "asc" | "desc" | null) => ({
  type: "SORT_BY_DATE",
  payload: { sortOrder },
});
// SET_START_DATE
export const setStartDate = (startDate?: number | null) => ({
  type: "SET_START_DATE",
  startDate:
    startDate !== null && startDate !== undefined
      ? moment(startDate).valueOf()
      : null,
});
// SET_END_DATE
export const setEndDate = (endDate?: number | null) => ({
  type: "SET_END_DATE",
  endDate:
    endDate !== null && endDate !== undefined
      ? moment(endDate).valueOf()
      : null,
});
export const resetFilters = () => ({
  type: "RESET_FILTERS",
});
