import { addExpense, removeExpense, editExpense } from "../../src/actions/expenses";

test('should setup remove-expense action object', () => {
  const action = removeExpense({ id: 'abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc'
  })
});

test('should setup edit-expense action obejct', () => {
  const action = editExpense('abc', { note: 'new note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc',
    updates: { note: 'new note' }
  })
})

test('should setup add-expense action object with values', () => {
  const expenseData = {
    description: 'rent',
    amount: 100000,
    createdAt: 1000,
    note: 'this is last month'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add-expense action object with defaults', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})


