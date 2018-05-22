import React, { Component } from 'react';
import Introduce from './Components/Introduce';
import SocialHandle from './Components/SocialHandle';

import './App.css';

class App extends Component {
  render() {
    let sectionStyle = { paddingTop: "10vh", paddingBottom: "10vh", height: "100vh", textAlign: "center" };

    return (
      <div className="App">
        <div className="container-fluid" >
          <div className="row">
            <div className="col-sm" style={sectionStyle}>
              <Introduce />
            </div>
            <div className="col-sm" style={{ ...sectionStyle}}>
              <SocialHandle />
            </div>
          </div>
        </div >
      </div>
    );
  }
}

export default App;
