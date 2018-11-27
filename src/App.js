import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

const routes = [];

class App extends Component {
  render() {
    return (
      <div>
        <h2>
          Avoid to use component in Route to pass props in a component beacouse
          is re mount the component
        </h2>
        <pre>
          {routes.map(({ path, component, MyComponent, Initialdata }) => (
            <Route
              path={path}
              render={props => (
                <MyComponent {...props} Initialdata={Initialdata} />
              )}
            />
          ))}
        </pre>
      </div>
    );
  }
}

export default App;
