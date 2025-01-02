import { connect } from "react-redux"
import ExpenseListItems from "./ExpenseListItems";
import { expenseReducerIntf } from "../TS_Interface/GlobalInterface";
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props: any) => (
    <div>
        <h1>
            Expense List!
        </h1>
        {props.expenses.map((expense:expenseReducerIntf) => {
            return <ExpenseListItems key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state: any) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);
