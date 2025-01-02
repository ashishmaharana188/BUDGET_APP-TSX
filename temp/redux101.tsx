import React from "react";
import { configureStore } from "@reduxjs/toolkit";

// Define your reducer function
const reducer = (state = { count: 0 }, action: any) => {
  // Set default state to prevent 'undefined'
  state = state || { count: 0 };

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state; // Always return the current state if no matching action
  }
};

function App() {
  // Configure store with the defined reducer
  const store = configureStore({
    reducer,
  });

  // Log the initial state
  console.log(store.getState()); // { count: 0 }

  // Dispatch some actions
  store.dispatch({
    type: "INCREMENT",
  });

  console.log(store.getState()); // { count: 1 }

  store.dispatch({
    type: "DECREMENT",
  });

  console.log(store.getState()); // { count: 0 }

  return (
    <div>
      <h1>Redux Count: {store.getState().count}</h1>
    </div>
  );
}

export default App;
