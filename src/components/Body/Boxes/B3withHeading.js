import React from 'react';
import styled from 'styled-components';
import DataB3withHeading from './B3withHeading.json';


const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  background-color: #708090;
`;

const Text = styled.div`

   > div {
   display: flex;
   flex-direction: column;
   margin-bottom: 15px;
   padding-top: 50px;
   }

   > div > div.title{
     font-size: 4rem;
     font-weight: 100;
     letter-spacing: 4px;
     align-self: center;
     color: #d3d4d1;
   }
   > div >div.para{
     width: 70%;
     margin: 0px auto;
     font-size: 1.5rem;
     font-weight: 200;
     letter-spacing: 1px;
     align-self: center;
     text-align: center;
     padding: 20px 0px;
     color: #fff;
   }
`;

const Box = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 100px;
  @media(max-width: 768px){
    flex-direction: column;
  }

  > div {
    flex-basis: 28.00%;
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    align-items: flex-end;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #bbb;
    box-shadow: 1px 4px 4px 0px #222;

    @media(max-width: 1100px){
      height: 140px;
    }
    @media(max-width: 768px){
      height: 350px;
      margin-bottom: 50px;
    }
    @media(max-width: 620px){
      height: 275px;
      margin-bottom: 50px;
    }
  }
  > div > p {
    font-size: 1.3rem;
    color: #000000;
    font-weight: 400;
    padding: 3px 20px;
    background-color: #adadad;
    opacity: 0.7;
  }
`;

class B3withHeading extends React.Component{

  render(){
    return(
      <Container>
        <Text>
        {
          DataB3withHeading.map((data)=>{
            if(data.type==='text'){
              return(
                <div key={data.id}>
                  <div className='title'>{data.title}</div>
                  <div className='para'>{data.text}</div>
                </div>
              )
            }
          })
        }
        </Text>
        <Box>
          {
            DataB3withHeading.map((imageData)=>{
                if(imageData.type === 'image'){
                  return(
                    <div key={imageData.id} style={{backgroundImage: `url(${imageData.image})`}} >
                      <p>{imageData.title}</p>
                    </div>
                  )
                }
            })
          }
        </Box>
      </Container>
    )
  }



}
export default B3withHeading;
