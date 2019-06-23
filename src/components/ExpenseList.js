import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

//  regular unconnected component
const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />
      })
    }
  </div>
);

// mapping state to props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

//  call to connect redux
export default connect(mapStateToProps)(ExpenseList);
