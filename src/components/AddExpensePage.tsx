import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { addExpense } from '../actions/expenses';
import { ExpenseFormProps } from '../TS_Interface/GlobalInterface';
import { Dispatch } from 'redux';

const AddExpensePage = (props: ExpenseFormProps & { dispatch: Dispatch }) => (
    <div>
      <ExpenseForm
      onSubmit={(expense: any) => {
        props.dispatch(addExpense(expense));
        console.log("Submitted", expense)
      }}
      dispatch={props.dispatch}
      />
      
    </div>
  );

  export default connect()(AddExpensePage);