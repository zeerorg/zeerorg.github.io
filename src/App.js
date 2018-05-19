import React, { Component } from 'react';
import Introduce from './Components/Introduce';
import SocialHandle from './Components/SocialHandle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" >
          <div className="row" >
            <div class="col-sm">
              <Introduce />
            </div>
            <div class="col-sm">
              <SocialHandle />
            </div>
          </div>
        </div >
      </div>
    );
  }
}

export default App;
