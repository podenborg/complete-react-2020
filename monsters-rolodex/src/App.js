import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {
          name: 'Frankenstein'
        },
        {
          name: 'Dracula'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">Does this work?</div>
    );
  }
}

export default App;
