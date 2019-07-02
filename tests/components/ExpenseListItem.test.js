import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../src/components/ExpenseListItem";
import expensesTestData from "../fixtures/expenses";

test('should render an expense list item', () => {
  const expense = expensesTestData[0]
  const wrapper = shallow(<ExpenseListItem {...expense}/>)
  expect(wrapper).toMatchSnapshot()
})
