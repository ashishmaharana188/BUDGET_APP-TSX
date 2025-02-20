import { Link } from "react-router-dom";
import { expenseReducerIntf } from "../TS_Interface/GlobalInterface";

const ExpenseListItems = ({
  id,
  description,
  amount,
  createdDt,
}: expenseReducerIntf) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdDt}
    </p>
  </div>
);
export default ExpenseListItems;
