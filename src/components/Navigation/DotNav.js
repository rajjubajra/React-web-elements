import React from 'react';
import styled, {keyframes} from 'styled-components';
import Data from './DotNav.json';


const rotate = keyframes`
    from {transform: rotate(0deg);}
     to  {transform: rotate(360deg);}
`;


const smooth = keyframes`
from {opacity: 0.3; letter-spacing: 0px; }
to   {opacity: 1.0; letter-spacing: 6px;}
`;



const Nav = styled.div`
    width: 100%;
    background-color: #b51b1b;
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


      > section {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      > section > ul{
        margin-top: -100px;
      }


      > section > ul.nav-bar > li{
              list-style: none;
              line-height: 2.5em;
              position: relative;
              animation: ${smooth} 2s linear;
            }
      > section > ul.nav-bar > li > i{
              cursor: pointer;
              margin-right: 30px;
              color: #2598e0;
              &:hover{
                color: #000;
              }
            }
      > section >ul.nav-bar > li > span.nav-item{
              visibility: hidden;
              position: relative;
              opacity: 0.6;
              transition: width 2s;
            }
      > section >ul.nav-bar > li > span.view-nav{
                display: 'inline-block';
                letter-spacing: 6px;
                color: #000;
                opacity: 1;
                text-shadow: 1px 0px 1px #060606;
                animation: ${smooth} 1s linear;
            }

`;


class DotNav extends React.Component{


  //Change className on mouse over
  handleMouseOver = (event) =>{
    console.log( 'mouse over id', event.target.parentElement.childNodes);
    event.target.parentElement.childNodes[1].className = 'view-nav';
  }
  //change classname back to prev class on mouse leave
  handleMouseLeav = (event) => {
    event.target.parentElement.childNodes[1].className = 'nav-item';
  }


  render(){
    return(
      <Nav>
        <div><span className="close-button"> X </span></div>
        <section>
        <ul className="nav-bar">
        {
          Data.map((data)=>{
              return (
                <li className={data.nav} key={data.id}>
                  <i onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeav} className="far fa-dot-circle"></i>
                  <span className='nav-item'>{data.nav}</span>
                </li>);
          })
        }
        </ul>
        </section>
      </Nav>
    )
  }
}
export default DotNav;
