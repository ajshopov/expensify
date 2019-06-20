import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({
    description: 'water bill',
    note: 'pay my bills',
    amount: 1500,
    createdAt: 1000
  }
));
store.dispatch(addExpense({
    description: 'gas bill',
    note: 'pay my billz',
    amount: 1200,
    createdAt: 1200
  }
));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

// console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));