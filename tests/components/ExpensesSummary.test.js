import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../src/components/ExpensesSummary";

test('should correctly render expenses summary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={230} />);
  expect(wrapper).toMatchSnapshot();
})

test('should correctly render expenses summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={10} expensesTotal={114200} />);
  expect(wrapper).toMatchSnapshot();
})
