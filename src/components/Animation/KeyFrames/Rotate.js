import React from 'react';
import styled, {keyframes} from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from { transform: rotate(0deg);}
  to { transform: rotate(360deg);}
`;

//create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  margin: 50px;
  width: 100px;
  height: 50px;
  border-radius: 50px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 10s linear infinite;
  border: 1px solid #ccc;
`;

{/* Keyframes does not wokr need search */}
const RotateObject = () =>(
    <Rotate>ABCD</Rotate>
)
export default RotateObject;
