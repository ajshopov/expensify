import React from 'react';
import { shallow } from "enzyme";
import ExpenseForm from "../../src/components/ExpenseForm";
import expensesTestData from "../fixtures/expenses";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

test('should render Expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot()
})

test('should render expense form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expensesTestData[0]}/>);
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
  const value = 'new description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'note text here'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if a valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if a INvalid input', () => {
  const value = '12.222'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expensesTestData[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expensesTestData[0].description,
    amount: expensesTestData[0].amount,
    note: expensesTestData[0].note,
    createdAt: expensesTestData[0].createdAt,
  })
})

test('should set a new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find(SingleDatePicker).prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)   
})

test('should set calendar focus on change', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true})
  expect(wrapper.state('calendarFocused')).toBe(true)   
})
