import React from 'react';
import styled from 'styled-components';
import DataB6 from './B6.json';

const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 50px 0px;
  background-color: #ff29581f;
`;
const Box = styled.div`
   margin: 0px auto;
   padding: 50px 0px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;

   @media(min-width: 1024px){
     width: 1024px;
   }
   @media(max-width:1023px) and (min-width: 685px){
     width: 685px;
   }
   @media(max-width:684px){
     width:360px;
   }


   > section {
      height: 325px;
      flex-basis: 25%;
      min-width: 320px;
      background-color: #fff;
      margin: 30px 10px;
      text-align: center;
      border-radius: 30px;
      display: flex;
      flex-flow: column nowrap;


     display: flex;
     flex-flow: column nowrap;

     > span{
         font-weight: 900;
         position: relative;
         top: -25px;
         font-size: 1.5rem;
         color: #fff;
         padding: 15px 10px;
         background-color: turquoise;
         width: 35px;
         margin: 0px auto;
         border-radius: 25px;
     }

     > div.title{
       font-family: cursive;
       font-size: 2rem;
       letter-spacing: 1px;
       padding: 20px 0px;
       color: #ff4b00;
     }

     > div.text{
         font-family: sans-serif;
         font-weight: 100;
         line-height: 1.5em;
     }

     > div{
       padding: 15px 20px;
     }

     > div.button{
        margin-top:auto;

        > button{
          padding: 10px 30px;
          border-radius: 20px;
          font-size: 1.0rem;
          font-weight: 100;
          background: #39ccba;
          margin-bottom: 15px;
          color: #fff;
        }
     }

   }
`;

class B6 extends React.Component{

  render(){
    return(
      <Container>
          <Box>
          {
            DataB6.map((data)=>{
              return(
                    <section key={data.id}>
                        <span className={data.fontawesome} ></span>
                        <div className="title">{data.title}</div>
                        <div className="text">{data.text}</div>
                        <div className="button">
                            <button>View Product</button>
                        </div>
                    </section>
              )
            })
          }
          </Box>
      </Container>
    )
  }
}
export default B6;
