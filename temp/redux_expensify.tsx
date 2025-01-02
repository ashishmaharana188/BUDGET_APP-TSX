import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import moment from "moment";

//interfaces

interface expenseIntf {
  id: string;
  description: string;
  note: string;
  amount: number;
  createdDt: number;
}

//ADD_EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdDt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdDt,
  },
});

//REMOVE_EXPENSE

const removeExpense = (id: string) => ({
  type: "REMOVE_EXPENSE",
  id,
});
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//  EXPENSES REDUCER

const demoState = {
  expense: [
    {
      id: "qwaszx",
      description: "October Rent",
      note: "Final Payment",
      amount: 5000,
      createdDt: 0,
    },
  ],

  filters: {
    text: "rent",
    sortBy: "amount", //date or amount,
    startDate: undefined,
    endDate: undefined,
  },
};

// Expenses Reducer
const expenseReducerDefaultState: expenseIntf[] = [];

const expenseReducer = (
  state: expenseIntf[] = expenseReducerDefaultState,
  action: any
): expenseIntf[] => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((expense: expenseIntf) => expense.id !== action.id);
    default:
      return state;
  }
};
//filter Reducer
// defaultreducer
const filterReducerDefaultState: any = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  expenses: expenseReducer,
  filters: filterReducer,
});

// store creation

const store = configureStore({
  reducer: rootReducers,
});

//ACTION DISPATCH
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 500 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 100 })
);

store.dispatch(removeExpense(expenseOne.expense.id));

function App() {
  return (
    <div>
      <h1>Reducers</h1>
    </div>
  );
}

export default App;
