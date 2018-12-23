import React from 'react';
import styled from 'styled-components';


const Background = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100%;

    > form {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
    }

    > form > * {
      border: 0px;
      padding: 10px;
      font-size: 1rem;
    }

    > form > input[type="submit"]{
      background-color:#fbc531;
      border: 1px solid #fbc531;
      color: #000;
    }
    > form > input[type="text"]{
      border: 1px solid #fbc531;
    }
`;






class AlignCenter extends React.Component{

  render(){
    return(
      <Background>
        <form>
          <input type="text" placeholder="Email address" />
          <input type="submit" value="Submit" />
        </form>

      </Background>
    )
  }
}



export default AlignCenter;
