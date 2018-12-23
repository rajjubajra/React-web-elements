import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon, faEnvelope } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faCodeBranch,} from '@fortawesome/free-solid-svg-icons';
import DataB3 from './B3.json';


const Box = styled.div`
  max-width: 1366px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: strech;

  @media (max-width: 800px){
    flex-wrap: wrap;
  }

  > div {
    background-color: #666;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: strech;
    flex-flow: column nowrap;

    padding: 30px 50px;
    margin: 10px;
    text-align: center;

    @media (max-width: 800px){
      flex-basis: 50%;
    }
  }

  > div > div.symbol{
    padding: 10px 20px;
    background-color: #000;
    width: 200px
    height:200px;
    align-self: center;
  }
  > div > div.symbol img{
    width: 100%;
    min-width: 100px;
  }
  > div > div > h3{
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 5px;
  }
  >div > div.text{
    text-align: center;
    padding: 0px 30px;
    font-weight: 200;
    line-height: 1.5em;
  }
  >div > div.btn{
    padding-top: 20px;
    margin-top: auto;
  }
  > div > div.btn > button{
      padding: 10px 20px;
      font-size: 0.8rem;
      background-color: #750909;
      color: #fff;
      border: 1px solid #999;
  }
`;

class B3 extends React.Component{

  render(){
    console.log(DataB3);
    return(
      <Box>
        {
          DataB3.map((data) => {
               return(
                 <div key={data.id}>
                    <div className="symbol"><img src={data.symbol} /></div>
                    <div><h3>{data.title}</h3></div>
                    <div className="text">{data.text}</div>
                    <div className="btn"><button>{data.button}</button></div>
                 </div>
               )
          })
        }
      </Box>

    )
  }
}
export default B3;
