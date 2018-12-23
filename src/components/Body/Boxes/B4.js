import React from 'react';
import styled from 'styled-components';
import DataB4 from './B4.json';

const Box = styled.div`
  max-width: 1366px;
  justify-content: space-arount;
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

  > div > div{
    background-color: #333;
    color: #fff;
    border: 1px solid #666;
    justify-content: center;
  }

  > div > div.image{
    flex-basis: 25%;
    padding: 20px;
  }
  > div > div.text{
    flex-basis: 75%;
    padding: 20px 40px;
    font-weight: 100;
    line-height: 1.5em;
    font-size: 0.9em;
    text-align: justify;
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

class B4 extends React.Component{


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
export default B4;
