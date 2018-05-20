import React, { Component } from 'react';
import Introduce from './Components/Introduce';
import SocialHandle from './Components/SocialHandle';

class App extends Component {
  render() {
    let sectionStyle = { marginTop: "15%", marginBottom: "15%" }

    return (
      <div className="App">
        <div className="container" >
          <div className="row" >
            <div class="col-sm" style={sectionStyle}>
              <Introduce />
            </div>
            <div class="col-sm" style={sectionStyle}>
              <SocialHandle />
            </div>
          </div>
        </div >
      </div>
    );
  }
}

export default App;
