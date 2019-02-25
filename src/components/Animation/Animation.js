import React from 'react';
import styled from 'styled-components';
import Rotate from './KeyFrames/Rotate';
import TriggerBox from './Transform/TriggerBox';


class Animation extends React.Component{

  render(){
    return(
      <div>
        <h1>Animations</h1>
        <div><Rotate /></div>
        
        <div><TriggerBox /></div> 
        
      </div>
    )
  }
}
export default Animation;