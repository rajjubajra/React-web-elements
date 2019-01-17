import React from 'react';
import Gallery from './Gallery/Gallery';
import Boxes from './Boxes/Boxes';
import Call2Action from './Call2Action/Call2Action';
import Contact from './Contact/Contact';
import LandingPage from './LandingPage/LandingPage';

const Body = () => {
    return(
      <div>
          <LandingPage />
          <Contact />
          <Call2Action />
          <Boxes />
      </div>
    )
}

export default Body;


/*
<Gallery />
<Boxes />
*/
