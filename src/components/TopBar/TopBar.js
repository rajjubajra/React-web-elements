import React from 'react';
import styled from 'styled-components';
import TopBar001 from './TopBar001';


const TopBlock = styled.div`

`;


class TopBar extends React.Component {



  render(){
    return(
      <TopBlock>
           <h3>Tob Bar</h3>
          <TopBar001 />
      </TopBlock>
    )
  }
}


export default TopBar;
