import React from 'react';
import myPic from '../resources/mypic.jpg';

const Introduce = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <img
          src={myPic}
          className="img-thumbnail rounded responsive-img"
          alt={"Me"}
        />
      </div>
      <h1>I'm Rishabh Gupta</h1>
      <h2>I create software</h2>
    </React.Fragment>
  )
}

export default Introduce;