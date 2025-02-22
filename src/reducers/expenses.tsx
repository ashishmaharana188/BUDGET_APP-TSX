import { expenseReducerIntf } from "../TS_Interface/GlobalInterface";


//EXPENSE REDUCER//
const expenseReducerDefaultState:expenseReducerIntf[] = []

const expenseReducer = (state = expenseReducerDefaultState, action: any) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, action.expense
            ]
        case 'REMOVE_EXPENSE':
            return [
                ...state.filter((expense:expenseReducerIntf) => expense.id !== action.id)
            ]
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                    ...expense,
                    ...action.updates
                }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};
export default expenseReducer