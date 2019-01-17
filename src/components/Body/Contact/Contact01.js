import React from 'react';
import styled from 'styled-components';
import DataContact01 from './Contact.json';

const Container = styled.div`
   max-width: 1366px;
   min-height: 628px;
   width: 100%;
   background-color: #ddd;
`;

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: centerl
    background-color: #798698;
    opacity:0.95;
    min-height:628px;
    max-width: 70%;
    padding-left: 150px;

    @media(max-width: 768px){
      max-width: 100%;
    }

    @media(max-width:1279px){
      padding-left: 0px;
    }


    > div.block{
      display:flex;
      flex-wrap: wrap;
      height: auto;
      width: 100%;
      justify-content: center;
    }
    > div.block > div{
        flex-basis: 33.33%;
        @media(max-width: 1122px){
          flex-basis: 50%;
          align-self: center;
        }
        @media(max-width:536px){
          flex-basis: 100%;
          align-self: center;
        }
    }
    > div.block > div >div.box{
          padding: 20px;
          margin: 20px 5px;
          line-height: 1.6em;
          > div.city{
            line-height: 3em;
          }

          > div.city >span{
            font-size: 1.7rem;
            font-family: serif;
            margin-left: 20px;
            letter-spacing: 3px;
          }
          >div.city > i{
            font-weight: 900;
            font-size: 1.9rem;
          }
          >div.addressline, div.postcode{
            font-size: 0.95rem;
            font-weight: 300;
          }
          >div.tel{
            font-size: 1rem;
            letter-spacing:1px;
            font-weight: 600;
          }
          >div.tel > i{
            margin-right: 15px;
          }
    }



`;

class Contact01 extends React.Component{

    render(){
      console.log(`inner width X height : ${window.outerWidth} x ${window.outerHeight}`);
      return(
        <Container style={{backgroundImage:`url('./images/background/food1.jpg')`}}>
          <Section>
              <div className='block'>
          {
            DataContact01.map((data)=>{
              return(
              <div key={data.id}>
                <div className='box'>
                  <div className='city'><i className="fas fa-map-marked-alt"></i><span>{data.city}</span></div>
                  <div className='addressline'>{data.addressline1}</div>
                  <div className='addressline'>{data.addressline2}</div>
                  <div className="postcode">{data.postcode}</div>
                  <div className='tel'><i className="fas fa-phone-volume"></i>{data.tel}</div>
                </div>
              </div>);
            })
          }
              </div>
          </Section>
        </Container>
      )
    }

}
export default Contact01;
