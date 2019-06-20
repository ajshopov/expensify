// higher order component - component that renders another component
// reuse code, render hijacking
// prop manipulation
// abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info component</h1>
    <p>the info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info, pls don't share</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (<WrappedComponent {...props} />) : (<p>please log in</p>)}
    </div>
  );
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="these details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="these details"/>, document.getElementById('app'));