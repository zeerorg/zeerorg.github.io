import React from 'react';
import twitterIcon from '../resources/twitter.png';
import githubIcon from '../resources/github.svg';

const SocialHandle = (props) => {
  let iconStyle = { width: "4vh" };
  let headingStyle = { marginBottom: "3vh" };
  let linkStyle = { fontSize: "2.8vh", marginBottom: "5vh" }
  return (
    <div className="container-fluid">
      <h1 style={headingStyle}>Message me on</h1>
      <a href="https://twitter.com/thisIsRGupta" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <img src={twitterIcon} alt="Twitter" style={iconStyle}/> @thisIsRGupta<br/>
      </a>
      <a href="https://github.com/zeerorg" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <img src={githubIcon} alt="Github" style={iconStyle}/> @zeerorg<br/>
      </a>
    </div>
  )
}

export default SocialHandle;