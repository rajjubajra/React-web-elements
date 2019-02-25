import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  transition: transform 300ms ease-in-out;
`;

const Trigger = styled.div`
  width: 200px;
  height: 200px;
  border: 20px solid solid #888;
  background: #222;

  &:hover ${Box}{
      transform: translate(210px,0px) rotate(90deg);
  }
`;


const TriggerBox = ()=> {
  return(
    <Trigger>
      <Box />
      <br /><hr />
      <div>
         <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions' target='_blank'>Transition Propperties</a>
      </div>
    </Trigger>
  )
}

export default TriggerBox;
