import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container.js';

class App extends React.Component {
  render() {
    return (
      <Container/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
