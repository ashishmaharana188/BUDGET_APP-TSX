import { expenseReducerIntf } from "../TS_Interface/GlobalInterface";
import { filterReducerIntf } from "../TS_Interface/GlobalInterface";
import moment from "moment";

export default (
  expenses: expenseReducerIntf[],
  { text, amount, sortBy, startDate, endDate, sortOrder }: filterReducerIntf
) => {
  return expenses
    .filter((expense) => {
      const createdDtMoment = moment(expense.createdDt);

      const startDateMatch = startDate
        ? moment(startDate).isSameOrBefore(createdDtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? moment(endDate).isSameOrAfter(createdDtMoment, "day")
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      const amountMatch =
        amount.trim() !== "" ? expense.amount == parseFloat(amount) : true;

      const inputMatch = textMatch || amountMatch;

      return startDateMatch && endDateMatch && inputMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date" && sortOrder === "desc") {
        return a.createdDt < b.createdDt ? 1 : -1; // Descending by date
      } else if (sortBy === "asc") {
        return a.createdDt > b.createdDt ? 1 : -1; // Ascending by amount
      } else if (sortBy === "amount") {
        return a.amount - b.amount; // Ascending by amount
      } else {
        return 0; // No sorting
      }
    });
};
