import React from 'react';
import myPic from '../resources/mypic.jpg';


const Introduce = (props) => {
  let imageStyle = { width: "40%", marginTop: "10%" };
  return (
    <React.Fragment>
      <h1>Rishabh</h1>
      <h1>Gupta</h1>
      <img
        src={myPic}
        class="img-fluid img-thumbnail rounded"
        alt={"Me"}
        style={imageStyle}
      />
    </React.Fragment>
  )
}

export default Introduce;