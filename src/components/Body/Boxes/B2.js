import React from 'react';
import styled from 'styled-components';
import DataB2 from './B2.json';


const Container = styled.div`
   display: flex;
   padding: 50px 100px 0px 100px;

   > div {
     flex-basis: 50%;
     padding: 50px 25px 0px 25px;
     margin-right: 25px;
   }

   @media(max-width: 925px){
     flex-direction: column;
     padding: 50px 50px 0px 50px;
   }

`;
const LeftColumn = styled.div`
    background-color: #d4d3d2;

    @media(max-width:925px){
      background-color: #fff;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
    > div > span.title{
      align-self: flex-end;
      font-size: 3rem;
      font-family: monospace;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: #ff6a6a;
    }
    > div > p{
        font-size: 1rem;
        font-family: sans-serif;
        font-weight: 100;
        line-height: 1.5em;
        color: #8c3a18;
        text-align: justify;

    }

`;
const RightColumn = styled.div`
    > section {
      display: flex;
      margin: 0px 10px 50px 10px;
    }

    > section > div.image{
      flex-basis: 30%
      > img{
        width: 90%;
        border-radius: 60px 60px 60px 60px;
        border: 1px solid #999;
      }
    }

    > section > div.text{
      flex-basis: 70%;
      padding: 0px 20px;

      > span.title{
          font-size: 1.5rem;
          font-family: monospace;
          letter-spacing: 2px;
          color: tomato;
          font-weight: normal;
        }
      > p{
          font-size: 0.9rem;
          font-weight: 100;
          line-height: 1.5em;
          font-family: sans-serif;
        }
    }
`;


class B2 extends React.Component{


  render(){
    return(
      <Container>
          <LeftColumn>
          {
            DataB2.map((data)=>{
              if(data.type === 'text'){
                return(
                  <div key={data.id}>
                    <span className="title">{data.title}</span>
                    <p>{data.text}</p>
                  </div>
                )
              }
            })
          }
          </LeftColumn>
          <RightColumn>
          {
            DataB2.map((data)=>{
              if(data.type === 'team'){
                return(
                  <section key={data.id}>
                      <div className="image"><img src={data.image} /></div>
                      <div className="text">
                        <span className="title">{data.title}</span>
                        <p>{data.text}</p>
                      </div>
                  </section>
                )
              }
            })
          }
          </RightColumn>
      </Container>
    )
  }


}
export default B2;
