import React from 'react';
import myPic from '../resources/mypic.jpg';


const Introduce = (props) => {
  return (
    <React.Fragment>
      <h1>Rishabh Gupta</h1>
      <img src={myPic} alt={"Me"}/>
    </React.Fragment>
  )
}

export default Introduce;