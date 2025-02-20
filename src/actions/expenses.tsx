import { v4 as uuid } from "uuid";

// ADD_EXPENSE
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdDt = 0,
} = {}) => ({
  type: "ADD_EXPENSE" as const,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdDt,
  },
});
// REMOVE_EXPENSE
export const removeExpense = (id: string) => ({
  type: "REMOVE_EXPENSE" as const,
  id,
});
// EDIT_EXPENSE
export const editExpense = (id: string, updates: any) => ({
  type: "EDIT_EXPENSE" as const,
  id,
  updates,
});
