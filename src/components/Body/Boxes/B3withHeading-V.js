import React from 'react';
import styled from 'styled-components';
import DataB3withHeading_V from './B3withHeading-V.json';



const Container = styled.div`
  max-width: 1366px;
  width: 100%;
`;

const Text = styled.div`
   margin-top: 50px;
   > div {
   display: flex;
   flex-direction: column;
   margin-bottom: 15px;
   }

   > div > div.title{
     font-size: 4rem;
     font-weight: 100;
     letter-spacing: 4px;
     align-self: center;
     color: #05ea78;
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
     color: #076f3b;
   }
`;

const Box = styled.div`
  padding: 0px 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 100px;

  @media (max-width: 768px){
    flex-direction: column;
  }

  @media (max-width: 1100px){
    padding: 0px 30px;
  }

  > div {
    flex-basis: 30.00%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media(max-width: 768px){
      margin-bottom: 20px;
      height: 500px;
    }
  }
  > div > p {
    font-size: 1.5rem;
    color: #ddd;
    font-weight: 400;
    font-family: fantasy;
    padding: 3px 20px;
    background-color: #333;
    opacity: 0.9;
    border-radius: 0px 0px;
    border: 1px solid #05ea78;
    letter-spacing: 3px;
  }
`;

class B3withHeading extends React.Component{

  render(){
    return(
      <Container>
        <Text>
        {
          DataB3withHeading_V.map((data)=>{
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
            DataB3withHeading_V.map((imageData)=>{
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
