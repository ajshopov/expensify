import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//  ACTION CREATORS
const addExpense = (
  { description = '', note = '', amount = 0, createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});


//  REDUCERS

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
      // return state.concat(action.expense);
    case 'REMOVE_EXPENSE':
      return state.filter(exp => exp.id !== action.id);
    case 'EDIT_EXPENSE':
      console.log(action)
      return state.map((expense) => {
        if(expense.id === action.id){
          return {...expense, ...action.updates};
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SORT_BY_DATE':
      return {...state, sortBy: "date"};
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: "amount"};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    };
  });
};

//  STORE

const store = createStore(
  combineReducers({
    // key- root state name: value- reducer to manage that
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(()=> {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: -2000 }));
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 50, createdAt: -1000 }));

// console.log(expense1);
// console.log(expense1.expense.id);

// store.dispatch(removeExpense({ id: expense1.expense.id }))
// store.dispatch(editExpense(expense2.expense.id, {amount: 350}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'asdf',
    description: 'rent',
    note: 'This was June payment',
    amount: 50000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: 'Adam',
//   age: 5
// }
// console.log({
//   ...user,
//   location: 'home',
//   age: 20 // overwrites if after the spread
// });