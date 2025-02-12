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
      /* const textMatch = text
        ? expense.description.toLowerCase().includes(text.toLowerCase())
        : true;

      const amountMatch = !isNaN(parseFloat(amount))
        ? expense.amount === parseFloat(amount)
        : true;  

      return startDateMatch && endDateMatch && (textMatch || amountMatch);*/
      const isNumber = !isNaN(parseFloat(text)) && isFinite(Number(text));
      if (isNumber) {
        return (
          startDateMatch && endDateMatch && expense.amount === parseFloat(text)
        );
      } else {
        return (
          startDateMatch &&
          endDateMatch &&
          expense.description.toLowerCase().includes(text.toLowerCase())
        );
      }
    })
    .sort((a, b) => {
      if (sortBy === "date" && sortOrder === "desc") {
        return a.createdDt < b.createdDt ? 1 : -1; // Descending by date
      } else if (sortBy === "date" && sortOrder === "asc") {
        return a.createdDt > b.createdDt ? 1 : -1; // Ascending by date
      } else if (sortBy === "amount" && sortOrder === "asc") {
        return a.amount - b.amount; // Ascending by amount
      } else if (sortBy === "amount" && sortOrder === "desc") {
        return b.amount - a.amount; // Descending by amount
      } else {
        return 0; // No sorting
      }
    });
};
