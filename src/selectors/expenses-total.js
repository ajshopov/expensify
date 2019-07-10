export default (expenses) => {
  return expenses.map((item) => item.amount).reduce((a, b) => a + b, 0);
}