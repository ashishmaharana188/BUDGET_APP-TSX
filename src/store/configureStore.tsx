import { configureStore, combineReducers } from "@reduxjs/toolkit";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () => {
  //ROOT REDUCER
  const rootReducer = combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
};
