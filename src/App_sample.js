import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  render() {

    // to create method which is part of class
    const name = "John Doe";
    const foo = () => 'Bar';
    const loading = false;

    const showName = true;

    // Below code is JSX not HTML
    return (
      <div className='App'>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName ? name : null}</h1>}
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
        <h1>Hello {name.toUpperCase()}</h1>
        <h1>Hello {foo()}</h1>
      </div>
    );

    // return React.createElement(
    //   'div',
    //   { className:'App' },
    //   React.createElement('h1', null, 'Hello from React')
    // );
  }
}

export default App;
