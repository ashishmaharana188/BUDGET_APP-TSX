import { expenseReducerIntf } from "../TS_Interface/GlobalInterface";
import { filterReducerIntf } from "../TS_Interface/GlobalInterface";
import moment from "moment";

export default (
  expenses: expenseReducerIntf[],
  { text, amount, sortBy, startDate, endDate }: filterReducerIntf
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
      if (sortBy === "date") {
        return a.createdDt < b.createdDt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else {
        return 0;
      }
    });
};
