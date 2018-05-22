import React from 'react';
import myPic from '../resources/mypic.jpg';


const Introduce = (props) => {
  let imageStyle = { width: "40%", opacity: "0.7", marginBottom: "4vh" };
  return (
    <React.Fragment>
      <img
        src={myPic}
        className="img-fluid img-thumbnail rounded"
        alt={"Me"}
        style={imageStyle}
      />
      <h1>I'm Rishabh Gupta</h1>
      <h1>and I create software</h1>
    </React.Fragment>
  )
}

export default Introduce;