import React from 'react';
import myPic from '../resources/mypic.jpg';


const Introduce = (props) => {
  let imageStyle = { width: "40%", opacity: "0.9", marginBottom: "4vh" };
  return (
    <React.Fragment>
      <img
        src={myPic}
        className="img-fluid img-thumbnail rounded"
        alt={"Me"}
        style={imageStyle}
      />
      <h1>I'm Rishabh Gupta</h1>
      <h2>I create software</h2>
    </React.Fragment>
  )
}

export default Introduce;