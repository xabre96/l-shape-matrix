import React, { Component } from 'react';
import MatrixTable from './MatrixTable';

const criteria = [
  {
    key: "x",
    criteria: "x"
  },
  {
    key: "y",
    criteria: "y"
  }
];

const variables = [
  {
    key: 1,
    name: "Aaa",
    requirements: [
      {
        key: "x",
        requirement: "x",
      },
      {
        key: "y",
        requirement: "y",
      }
    ],
  },
  {
    key: 2,
    name: "Bbb",
    requirements: [
      {
        key: "x",
        requirement: "a",
      },
      {
        key: "y",
        requirement: "b",
      }
    ],
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>L-shaped Matrix</h1>
        </header>
        <MatrixTable
          criteria={criteria}
          variables={variables}
        />
      </div>
    );
  }
}

export default App;
