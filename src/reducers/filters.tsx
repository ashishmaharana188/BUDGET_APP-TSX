import { filterReducerIntf } from "../TS_Interface/GlobalInterface";

//Filter Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "",
  amount: "",
  startDate: null,
  endDate: null,
};

const filterReducer = (
  state: filterReducerIntf = filterReducerDefaultState,
  action: any
) => {
  switch (action.type) {
    case "SET_TEXT_FIELD":
      return {
        ...state,
        text: action.text,
      };
    case "SET_AMOUNT_FIELD": // New action type for amount
      return {
        ...state,
        amount: action.amount,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
export default filterReducer;
