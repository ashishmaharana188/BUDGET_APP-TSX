// App.tsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./themes/index";
import globalStyles from "./mainGlobalCss";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpense from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 5000,
    createdDt: 1738079643538,
  })
);
store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 50000,
    createdDt: 1737993243538,
  })
);
store.dispatch(
  addExpense({
    description: "Games Bill",
    amount: 70000,
    createdDt: 1738061465051,
  })
);
store.dispatch(
  addExpense({
    description: "Cable Bill",
    amount: 50000,
    createdDt: 1738166043538,
  })
);

//setTimeout(() => {
//  store.dispatch(setTextFilter('bill'))
//}, 3000);

const state = store.getState();
const visibleData = getVisibleExpense(state.expenses, state.filters);

console.log(visibleData);

const jsx = <AppRouter />;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Provider store={store}>{jsx}</Provider>
    </ThemeProvider>
  );
}

export default App;
