import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      // key- root state name: value- reducer to manage that
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  return store;
}
