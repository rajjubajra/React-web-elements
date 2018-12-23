import React from 'react';
import styled from 'styled-components';
import DataB4 from './B4.json';

const Box = styled.div`
  max-width: 1366px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px;

  > div {
     flex-basis: 50%;
     display:flex;
     padding: 30px 0px;
     @media (max-width:768px){
       flex-basis: 100%;
       flex-wrap: wrap;
     }
  }

  > div > div.image{
    flex-basis: 25%;
    padding: 20px;

  }
  > div > div.text{
    flex-basis: 75%;
    padding: 20px;
    font-weight: 100;
  }

  > div > div.text > h3{
    font-weight: 300;
    letter-spacing: 2px;
  }

  > div> div.image img{
    max-width: 150px;
    border-radius: 144px 141px;
    border: 1px solid #ddd;
    padding: 5px;
    width: 100%;
  }




`;

class B4Light extends React.Component{


  render(){
    console.log({DataB4});
    return(
      <Box>
      {
        DataB4.map((data)=>{
            return(
              <div key={data.id}>
                      <div className="image">
                        <img src={data.image} />
                      </div>
                      <div className="text">
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                      </div>
              </div>
            )
        })
      }
      </Box>
    )
  }

}
export default B4Light;
