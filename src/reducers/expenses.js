const expensesReducerDefaultState = []

// expensesReducer
export default (state = expensesReducerDefaultState, action) => {
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
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
