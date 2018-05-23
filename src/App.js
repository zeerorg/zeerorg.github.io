import React, { Component } from 'react';
import Introduce from './Components/Introduce';
import SocialHandle from './Components/SocialHandle';

import './App.css';

class App extends Component {
  render() {
    let sectionStyle = { paddingTop: "10vh", paddingBottom: "10vh", height: "100vh", textAlign: "center" };
    let styleIntro = { backgroundColor: "#6D9DA1" };
    let styleSocl = { backgroundColor: "#F4E8AC" };

    return (
      <div className="App">
        <div className="container-fluid" >
          <div className="row">
            <div className="col-sm" style={{...sectionStyle, ...styleIntro}}>
              <Introduce />
            </div>
            <div className="col-sm" style={{ ...sectionStyle, ...styleSocl}}>
              <SocialHandle />
            </div>
          </div>
        </div >
      </div>
    );
  }
}

export default App;
