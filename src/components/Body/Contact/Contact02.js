import React from 'react';
import styled from 'styled-components';
import Data from './Contact.json';

const Container = styled.div`
 width: 100%;
     > section{
       display: flex;
       flex-direction: column;
       padding: 30px 0px;
       text-align: center;
     }
     > section > h1{
        position: relative;
        width: 100%;
        margin: 40px auto;
        box-sizing: border-box;
        color: #2e2e2e;
        font-size: 40px;
        line-height: 60px;
        font-family: 'futurafuturiscbold', Helvetica, sans-serif;
        font-weight: 800;
        text-align: center;
        text-transform: uppercase;
     }

     > section > p{
         position: relative;
         width: 100%;
         margin: 10px auto;
         padding: 0 10px;
         font-size: 1.2rem;
         font-weight: 100;
         letter-spacing: -1px;
     }

     > section > button{
       display: inline-block;
       width: auto;
       height: auto;
       position: relative;
       margin: 40px auto;
       padding: 20px 40px;
       font-size: 1.2rem;
       color: #00c3ff;
       border: solid 2px #00c3ff;
       cursor: pointer;
     }
     > section > button:hover{
       background-color: #00c3ff;
       color: #fff;
     }

     > section.address{
       background-color: #ddd;
     }

     > section > h2{
        margin: 40px auto;
        font-weight: 300;
        font-size: 3rem;
        letter-spacing: 5px;
     }
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;

    > div.column{
      margin: 20px 30px;
           > div{
             line-height: 1.5em;
           }


            > div.city{
              font-size: 2rem;
              font-weight: 800;
              letter-spacing: -1px;
            }
            >div.tel{
              font-size: 1.2rem;
              font-weight: 100;
              letter-spacing: 3px;
            }
            >div.email{
              font-size: 1.2rem;
              font-weight: 100;
              letter-spacing: 1px;
            }
    }

    > i.fa, i.fas {
    font-weight: 900;
    margin: 0px 15px;
    }
}
`;

class Contact02 extends React.Component{

  addressBlock = ()=>{
    let address = [];
    for(let i= 1; i<=3; i++){
      address.push(
        <div key={Data[i].id} className="column">
            <div className='city'>{Data[i].city}</div>
            <div className='tel'><i className="fas fa-phone"></i>{Data[i].tel}</div>
            <div className='email'><i className="fas fa-at"></i>{Data[i].email}</div>
        </div>
      )
    }
    return address;
  }

  render(){
    return(
      <Container>
        <section>
           <h1>Contact</h1>
           <p>Let's make something awesome together. Get in touch. We'd love to hear about your project.</p>
           <button>Get In Touch</button>
        </section>
        <section className='address'>
            <h2>All Offices</h2>
            <Row>
               {this.addressBlock()}
            </Row>
        </section>
      </Container>
    )
  }
}
export default Contact02;
