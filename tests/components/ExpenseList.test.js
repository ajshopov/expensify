import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../src/components/ExpenseList";
import expensesTestData from "../fixtures/expenses";

test('should render expenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expensesTestData}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should render with no expenses with empty messgae', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>)
  expect(wrapper).toMatchSnapshot()
})
