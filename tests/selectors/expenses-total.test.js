import selectExpensesTotal from "../../src/selectors/expenses-total";
import expensesTestData from "../fixtures/expenses";

test('should return 0 if no expenses', () => {
  expect(selectExpensesTotal([])).toBe(0)
})

test('should correctly add a single expense', () => {
    expect(selectExpensesTotal([expensesTestData[0]])).toBe(195)
})

test('should correctly add multiple expenses', () => {
  expect(selectExpensesTotal(expensesTestData)).toBe(114195)
})