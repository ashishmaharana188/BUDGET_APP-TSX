import {
  configureStore,
  combineReducers,
  EnhancedStore,
} from "@reduxjs/toolkit";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

<<<<<<< HEAD
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
=======
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
>>>>>>> 4bd873300fb8343676eddab1a2da3df39af88a53
