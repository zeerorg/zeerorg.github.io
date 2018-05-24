import React from 'react';
import twitterIcon from '../resources/twitter.png';
import githubIcon from '../resources/github.svg';
import emailIcon from '../resources/email.svg';

const SocialHandle = (props) => {
  let iconStyle = { width: "5vh" };
  let headingStyle = { marginBottom: "4vh" };
  let linkStyle = { fontSize: "2.8vh", display: "block", marginBottom: "1.5vh" }
  // TODO: Add margin to links
  return (
    <div className="container-fluid">
      <h1 style={headingStyle}>Message me on</h1>
      <a href="https://twitter.com/thisIsRGupta" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <img src={twitterIcon} alt="Twitter" style={iconStyle}/> @thisIsRGupta
      </a>
      <a href="https://github.com/zeerorg" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        <img src={githubIcon} alt="Github" style={iconStyle}/> @zeerorg
      </a>
      <span style={linkStyle}>
        <a href="mailto:r.g.gupta@outlook.com" target="_blank" rel="noopener noreferrer" ><img src={emailIcon} alt="Email" style={iconStyle}/></a> 
        r.g.gupta@outlook.com
      </span>
    </div>
  )
}

export default SocialHandle;