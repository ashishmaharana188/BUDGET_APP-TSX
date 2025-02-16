import { Dispatch } from "redux";
import { Moment } from "moment";
//INTERFACES
export interface expenseReducerIntf {
  id: string;
  description: string;
  note?: string;
  amount: number;
  createdDt: number;
}
export interface filterReducerIntf {
  text: string;
  sortBy: string | null;
  startDate?: Moment | null;
  endDate?: Moment | null;
  sortOrder: string | null;
}

export interface expenseListFilters extends filterReducerIntf {
  dispatch: Dispatch;
}

export interface ExpenseFormProps {
  expense?: expenseReducerIntf;
  onSubmit?: (expense: {
    id?: string;
    description: string;
    amount: string;
    createdDt: number;
    note: string;
  }) => void;
  dispatch?: Dispatch;
}

// Define the state interface

export interface ExpenseFormState {
  description: string;
  note: string;
  amount: string;
  createdDt: Moment;
  error: string;
}

export interface EditExpensePageProps {
  expense: expenseReducerIntf | null; // Define the type for expense
  dispatch: Dispatch; // Include dispatch in props
}
