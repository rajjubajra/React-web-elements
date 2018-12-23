import React from 'react';
import styled from 'styled-components';
import DataB3TextAtBottom from './B3TextAtBottom.json';

const Box = styled.div`
  display: flex;
  justify-content: strech;
  height: 400px;
  padding: 50px 100px;
  margin: 50px 0px;
      @media(max-width: 900px){
        flex-direction: column;
        justify-content: center;
        padding: 50px 140px;
        height: auto;
      }
      @media(max-width: 768px){
        padding: 50px 50px; 
      }

  > div{
    margin: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    align-items: flex-end;
    box-shadow: 5px 4px 3px #d2d2d2;
    border: 1px solid #fff;
        @media(max-width:900px){
          height: 400px;
        }
  }
  > div > div{
      padding: 10px;
      background-color: #888;
      opacity: 0.8;
      text-align: center;

      > span.title{
        font-size: 1.6rem;
        letter-spacing: 2px;
        color: snow;
        font-family: monospace;
      }
      >  p {
        font-size: 1rem;
        line-height: 1.4em;
        color: snow;
        font-weight: 100;
        font-family: fantasy;
        letter-spacing: 1px;
      }
  }


`;

class B3TextAtBottom extends React.Component{

  render(){
    console.log(DataB3TextAtBottom);
    return(
      <Box>
        {
          DataB3TextAtBottom.map((data)=>{
            return(
              <div key={data.id} style={{ backgroundImage: `url(${data.image})`}}>
                  <div>
                  <span className="title">{data.title}</span>
                  <p>{data.text}</p>
                  </div>
              </div>
            )
          })

        }
      </Box>
    )
  }


}
export default B3TextAtBottom;
