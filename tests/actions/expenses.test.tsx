import { expect, test } from 'vitest'
import { addExpense, editExpense, removeExpense} from '../../src/actions/expenses';
import { stringify } from 'uuid';


test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "123abc",
        updates: {
            note: 'New note value'
        }
    });
});

test('should setup add expense action object with new values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 10090,
        createdDt: 1000,
        note: 'This is rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});
test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdDt: 0,
            note: ''
        }
    })
});
