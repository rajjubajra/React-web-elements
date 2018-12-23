import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column, MobileWidth, TableWidth, DesktopWidth } from './NavBarStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';


const Nav = styled.div`
  width: 100%;
  display: block;
`;

const Title = styled.div`
    font-weight: 100;
    font-family: sans-serif;
    font-size: 2rem;
    letter-spacing: 3px;
    padding: 27px 5px;
`;

const NavMobile = styled.div`
   @media only screen and (min-width:${MobileWidth}px){ //768px
     display: none;
   }
   position: relative;
   top: -55px;


   > div {
     text-align: right;
   }
   > div > button{
     padding: 20px;
     margin: 0px 20px;
     border: 0px;
   }

   > div > ul{
     text-align: center;
     background-color: #000;
     color: #ccc;
     padding: 10px 0px;
   }
   > div > ul > li{
     list-style: none;
     margin: 5px 0px;
     padding: 5px;
     cursor: pointer;
   }
`;

const NavDesktop = styled.div`
 @media only screen and ( max-width: ${MobileWidth}px){
   display: none;
 }


  > ul{
    text-align: right;
  }
  > ul > li{
    font-size: 0.9rem;
    list-style: none;
    display: inline-block;
    margin: 0px 1px;
    padding: 20px 15px;
    font-weight: 100;
    cursor: pointer;
  }
  > ul > li:hover{
    border-bottom: 2px solid #619cab;
  }


  > ul > li:last-child{
    border: 1px solid #619cab;
    margin-right: 10px;
  }
  > ul > li:last-child:hover{
    border: 1px solid #619cab;

    background-color: #ccc;

    color: #000;
    font-weight: 100;
  }

  >ul > li:Active{
    border-bottom: 2px solid #000;
  }
`;

class  NavBarOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
  componentDidMount(){
    const innerWidth = window.innerWidth;
    console.log('Inner Width: ', innerWidth);
  }

  render(){
    return(
      <div>
        <Nav>
        <Container>
           <Row>
            <Column xs='12' sm='3' md='3' className="title">
              <Title>BlueBerry</Title>
            </Column>
            <Column xs='12' sm='9' md='9' className="nav-bar">
              <NavMobile>
                  <div>
                    <button onClick={this.handleClick}>
                      {this.state.isToggleOn ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} /> }
                    </button>
                  </div>
                    {this.state.isToggleOn ? ''
                       :<div><ul>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Our Work</li>
                            <li>Team</li>
                            <li>About us</li>
                            <li>Contact</li>
                        </ul></div>}
              </NavMobile>
              <NavDesktop>
                  <ul>
                      <li>Home</li>
                      <li>Services</li>
                      <li>Our Work</li>
                      <li>Team</li>
                      <li>About us</li>
                      <li>Contact</li>
                  </ul>
              </NavDesktop>
            </Column>
            </Row>
        </Container>
        </Nav>
      </div>
    )
  }
}


export default NavBarOne;
