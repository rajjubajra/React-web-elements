import styled from 'styled-components';


const SquareBox = styled.div`
  display: inline-block;
  background: blue;
  width: 200px;
  height: 200px;
  transition: transform 300ms ease-in-out;

  &:hover{
    transform: translate(200px, 150px) rotate(90deg);
  }
`;

export default SquareBox;
