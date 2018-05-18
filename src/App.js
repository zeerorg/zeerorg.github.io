import React, { Component } from 'react';
import Introduce from './Components/Introduce';
import SocialHandle from './Components/SocialHandle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduce />
        <SocialHandle />
      </div>
    );
  }
}

export default App;
