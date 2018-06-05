import React from 'react';
import ReactDOM from 'react-dom';

var axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        Shop modules
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
