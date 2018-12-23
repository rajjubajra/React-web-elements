import React from 'react';
import styled, {keyframes} from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  animation: ${rotate} 10s linear infinite;
  padding: 2rem 1rem;
  border: 1px solid #ccc;
  font-size: 2rem;
`;

{/* Keyframes does not wokr need search */}
const RotateObject = () =>{
  return(
    <Rotate>ABCD</Rotate>

  );
}

export default RotateObject;
