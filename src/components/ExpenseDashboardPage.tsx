import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilter";

const ExpenseDashboardPage = () => (
    <div>
        <h1>
            <ExpenseListFilters />
            <ExpenseList/>
        </h1>
    </div>
);
export default ExpenseDashboardPage