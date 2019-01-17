import React from 'react';
import styled, {keyframes} from 'styled-components';
import Data from './FullPageNav.json';

const rotate = keyframes`
    from {transform: rotate(0deg);}
     to  {transform: rotate(360deg);}
`;

const smooth = keyframes`
from {left: 0px; opacity: 0.03;}
 to {left: 200px; opacity: 1;}
`;

const Nav = styled.div`
        width: 100%;
        background-color: #ffca00fa;
        display: flex;
        flex-direction: column;
        > div  {
          width: 40px;
          padding: 11px 0px;
          text-align: center;
          border-radius: 30px;
          background: red;
          color: #fff;
          margin: 15px;
          position: relative;
          -webkit-animation: ${rotate} 20s infinite;
          -webkit-animation: ${rotate} 10s infinite;
          animation: ${rotate} 2s linear infinite;
          opacity: 1;
          transition: 0.3s;

              &:hover{
                width: 28px;
                padding: 5px 0px;
                text-align: center;
                border-radius: 30px;
                background-color: #000;
                animation: ${rotate} 0s infinite;
                opacity: 0.5;
                cursor: pointer;
                margin: 21px;
              }

          }


        > section{
          margin-top: -35px;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          text-align: center;
        }
        > section > ul > li{
          list-style: none;
          line-height: 2em;
          letter-spacing: 3px;
          color: #000;
          font-size: 1.3rem;
          font-weight: 300;
          cursor: pointer;
          position: relative;
          opacity: 0.6;
          transition: 0.5s;
        }
        > section > ul > li:hover{
          letter-spacing: 6px;
          color: #fff;
          opacity: 1;
          text-shadow: 2px 0px 3px #060606;
        }
`;

class FullPageNav extends React.Component{
      render(){
        return(
          <Nav>
            <div><span className="close-button"> X </span></div>
            <section>
            <ul>
            {
              Data.map((data)=>{
                return(
                    <li key={data.id}>{data.nav}</li>
                )
              })
            }
            </ul>
            </section>
          </Nav>
        )
      }
}
export default FullPageNav;
