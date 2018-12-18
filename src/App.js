import React, { Component } from "react";
import Introduce from "./Components/Introduce";
import SocialHandle from "./Components/SocialHandle";

import "./App.css";

class App extends Component {
  render() {
    let sectionStyle = {
      paddingTop: "15vh",
      paddingBottom: "10vh",
      height: "100vh",
      textAlign: "center"
    };
    let styleIntro = { backgroundColor: "#6D9DA1" };
    let styleSocl = { backgroundColor: "#F4E8AC" };

    return (
      <div className="App">
        <div
          className="container-fluid"
          style={{ ...sectionStyle, ...styleIntro }}
        >
          <Introduce />
        </div>
        <div
          className="container-fluid"
          style={{ ...sectionStyle, ...styleSocl }}
        >
          <SocialHandle />
        </div>
      </div>
    );
  }
}

export default App;
