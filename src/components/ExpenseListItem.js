import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

//  destructuring format
// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
const ExpenseListItem = (props) => (
  <div>
    <h4><Link to={`/edit/${props.id}`}>{props.description}</Link></h4>
    <p>
      {numeral(props.amount / 100).format('$0,0.00')} - 
      {moment(props.createdAt).format('MMMM Do YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;