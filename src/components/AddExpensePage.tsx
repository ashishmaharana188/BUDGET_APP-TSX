import { connect } from "react-redux";
import { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { ExpenseFormProps } from "../TS_Interface/GlobalInterface";
import { Dispatch } from "redux";

/*class based component*/
class AddExpensePage extends Component<ExpenseFormProps> {
  handleSubmit = (expense: any) => {
    if (this.props.onSubmit) {
      this.props.onSubmit(expense);
      console.log("Submitted", expense);
    }
  };

  render() {
    return (
      <div>
        <ExpenseForm
          onSubmit={this.handleSubmit}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSubmit: (expense: any) => dispatch(addExpense(expense)),
  };
};
export default connect(undefined, mapDispatchToProps)(AddExpensePage);

/*
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
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
  const mapDispatchToProps =  (dispatch: any) => {
    return {
      onSubmit: (expense: any) => dispatch(addExpense(expense))
    }
  }

  export default connect(undefined,mapDispatchToProps)(AddExpensePage);*/
