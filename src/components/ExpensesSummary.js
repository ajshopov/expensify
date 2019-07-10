import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const pluralise = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedAmount = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <p>Viewing {expenseCount} {pluralise} totalling {formattedAmount}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);