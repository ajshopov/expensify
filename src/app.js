import React from "react";
import ReactDOM from "react-dom";
import 'react-dates/initialize';
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import 'react-dates/lib/css/_datepicker.css';
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import moment, { now } from "moment";

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// store.dispatch(addExpense({
//     description: 'Water bill',
//     note: 'pay my bills',
//     amount: 4500,
//     createdAt: moment()
//   }
// ));
// store.dispatch(addExpense({
//     description: 'gas bill',
//     note: 'pay my billz',
//     amount: 1200,
//     createdAt: 1000
//   }
// ));
// store.dispatch(addExpense({
//   description: 'rent',
//   note: 'pay my billz',
//   amount: 104000,
//   createdAt: 900
// }
// ));
// store.dispatch(setTextFilter('bill'));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));