import expensesReducer from "../../src/reducers/expenses";
import expenses from "../fixtures/expenses";

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove an exiting expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'desc',
      note: '',
      amount: 1,
      createdAt: undefined
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
  const amount = 295
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0]).toEqual({ ...expenses[0], amount })
})

test('should not edit expense if ID not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 295
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})