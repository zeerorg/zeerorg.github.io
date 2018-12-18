import React from "react";

const ExternalLink = props => {
  let linkStyle = { marginBottom: "1.5vh", color: "blue" };
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={linkStyle}
    >
      {props.children}
    </a>
  );
};

const SocialHandle = props => {
  let headingStyle = { marginBottom: "4vh" };
  // TODO: Add margin to links
  return (
    <div className="container-fluid">
      <h1 style={headingStyle}>Message me on</h1>
      <h4>
        <ExternalLink link="https://twitter.com/thisIsRGupta">twitter</ExternalLink> /{" "}
        <ExternalLink link="https://github.com/zeerorg">github</ExternalLink> /{" "}
        <ExternalLink link="https://www.linkedin.com/in/rishabhgupta4325/">linked in</ExternalLink> /{" "}
        <ExternalLink link="https://email.com/">
          r.g.gupta@outlook.com
        </ExternalLink>
      </h4>
      <h1 style={{marginTop: "25vh"}}>Checkout my <a href="https://blog.zeerorg.site"><u>blog</u></a></h1>
    </div>
  );
};

export default SocialHandle;
