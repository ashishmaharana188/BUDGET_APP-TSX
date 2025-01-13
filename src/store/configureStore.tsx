import {
  configureStore,
  combineReducers,
  EnhancedStore,
} from "@reduxjs/toolkit";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

//ROOT REDUCER
const rootReducer = combineReducers({
  expenses: expenseReducer,
  filters: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function createStore(): EnhancedStore {
  return store;
}
