import React from 'react';
import styled from 'styled-components';



const FixedBgDivOne = styled.div`
/* The image used */
background-image: url("./images/B3withHeading-V/2.jpg");

/* Set a specific height */
min-height: 500px; 

/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;



const ScrollingText = styled.div`
    height: 100vh;
    background-color: #ccc;
    font-size:36px;
`;


class parallax01 extends React.Component{

  render(){
    return(
      <div>
        <FixedBgDivOne></FixedBgDivOne>
        <ScrollingText>
          <p> Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling.
          Tip: Try to remove the background-attachment property to remove the scrolling effect.</p>
        </ScrollingText>
        <FixedBgDivOne></FixedBgDivOne>
        <ScrollingText>
          <p> Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling.
          Tip: Try to remove the background-attachment property to remove the scrolling effect.</p>
        </ScrollingText>
        <FixedBgDivOne></FixedBgDivOne>
      </div>
    )
  }
}
export default parallax01;