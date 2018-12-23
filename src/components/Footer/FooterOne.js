import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0px auto;
    display: block;
    clear: both;
    background-color: rgb(0,11,53);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 10px 20px;
  color: #999;

  > div{

    color: #999;
    font-weight: 100;
    letter-spacing: 1px;
  }

  > p.popup{
    font-size: 0.8em;
  }
  > hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;

  }

`;

const Column = styled.div`
   margin: 10px;
   > ul {
     padding: 10px 10px 10px 0px;
   }
   > h3{
     color: #eee;
     font-weight: 100;
     font-size: 1em;
   }
   > ul.navigation > li, ul.address > li{
     list-style: none;
     color: #888;
     font-weight: 100;
     margin-bottom: 10px;
     letter-spacing: 1px;
     font-size: 0.8em;
   }
   > ul.navigation > li{
     cursor: pointer;
   }
   > ul.navigation > li:hover{
     color: #999;
   }
`;

const CopyRight = styled.div`
  @media screen and (min-width: 768px){
    display: flex !important;
    flex-direction; row;
  }
  width: 100%; /* max width is defined on Container */

  font-size: 0.9em;
  color: #888;
  letter-spacing: 1px;

  > div {
    margin-right: 10px;
  }

  >  hr {
    margin-top: 9px !important;
    margin-left: 30px !important;
    font-weight: 100;
    color: #777;
  }

`;

const CookieeAlert = styled.div`
  tex-align: center;
  color: #999;
  font-size: 0.8em;
  margin: 10px 20px;
  padding: 10px;
`;




class FooterOne extends React.Component{
  constructor(){
    super()
    this.state = {
       copyRightYear: '',
    }
  }






  render(){
    return(
      <Container>
        <Row>
            <Column >
            <h3>Company</h3>
              <ul className='navigation'>
                  <li>Services</li>
                  <li>Our Work</li>
                  <li>Team</li>
                  <li>About us</li>
                  <li>Contact</li>
              </ul>
            </Column>
            <Column >
            <h3>About us</h3>
               <ul  className='navigation'>
                  <li>Team</li>
               </ul>
            </Column>
            <Column >
            <h3>Social</h3>
              <ul  className='navigation'>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                  <li>Youtube</li>
              </ul>
            </Column>
            <Column >
            <h3>Blog</h3>
              <ul  className='navigation'>
                 <li>Language: English</li>
                 <li>Language: Japanese</li>
               </ul>
            </Column>
            <Column  >
            <h3>Work Places</h3>
            <ul className='address'>
                <li>Address i</li>
                <li>i Road Name</li>
                <li>i City</li>
            </ul>
            <ul className='address'>
                <li>Address ii</li>
                <li>ii Road Name</li>
                <li>ii City</li>
            </ul>
            </Column>
        </Row>
        <CopyRight>
            <div>&copy; {new Date().getFullYear()}</div>
            <div>This page and designed and developed by RD Bajra @ yellow-website.com</div>
            <hr />
        </CopyRight>
        <CookieeAlert>
           <p className='popup'>This website is using cookies for providing services, advertisement personalization, and visitors analytics purposes. By using this website you agree with using cookies.</p>
        </CookieeAlert>
      </Container>
    )
  }


}


export default FooterOne;
