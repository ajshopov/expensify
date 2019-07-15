import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

//  regular unconnected component
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">No Expenses</div>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
          })
        )
      }
    </div>
  </div>
);

// mapping state to props
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

//  call to connect redux
export default connect(mapStateToProps)(ExpenseList);
