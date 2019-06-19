import { createStore } from 'redux';

// const add = (data) => {
//   return data.a + data.b;
// };
// const add = ({ a, b }, c) => {
//   return a + b + c;
// };
// console.log(add({ a: 1, b: 12 }, 100));


//  action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ count }) => ({
  type: 'SET',
  count: count
});

// Reducers
// 1. pure functions - output relys only on input
// 2. never change state or action, rather return object of new state
const countReducer = (state = { count: 0 }, action) => {
  // console.log('running');
  switch (action.type) {
    case 'INCREMENT':
      console.log(action);
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}
const store = createStore(countReducer);


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch({
  type: 'SET',
  count: 102
})
store.dispatch(setCount({ count: 500 }));