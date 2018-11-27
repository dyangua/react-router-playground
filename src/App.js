import React, { Component } from "react";
import "./App.css";
import { Redirect, withRouter } from "react-router-dom";

// Component Composition
// Declarative UI
// event -> state change -> re-render

const fakeAPi = new Promise();

class Login extends Component {
  state = {
    toDashBoard: false
  };

  handleSubmit = user => {
    //  do some stuff with api ... then() {
    this.setState({
      toDashBoard: true
    });
    // }
  };

  handleSubmitHistory = user => {
    //  do some stuff with api ... then() {
    fakeAPi().then(() => this.props.history.push("/dashboard"));
    // }
  };

  render() {
    if (this.state.toDashBoard === true) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

// export default Login;
export default withRouter(Login);
