import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { editExpense, removeExpense } from "../actions/expenses";
import { expenseReducerIntf } from "../TS_Interface/GlobalInterface";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const expense = useSelector((state: any) =>
    state.expenses.find((expense: expenseReducerIntf) => expense.id === id)
  );

  // Logging for debugging
  console.log("editId", id);
  console.log("expense", expense);

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          if (id) {
            dispatch(editExpense(id, expense));
            navigate("/");
          } else {
            console.log(`id is not present`);
          }
        }}
      />

      <button
        onClick={() => {
          if (id) {
            dispatch(removeExpense(id));
            navigate("/");
          } else {
            console.log("Entry not available to delete");
          }
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default EditExpensePage;
