import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import createStore from "../../src/store/configureStore";
import ExpenseDashboard from "../../src/components/ExpenseDashboardPage";

test("should render Dashboard correctly", () => {
  const store = createStore();
  const { asFragment, getAllByRole } = render(
    <Provider store={store}>
      <ExpenseDashboard />
    </Provider>
  );
  // Create a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});
