import React from 'react';
import styled from 'styled-components';
import DataImg3 from './Img3.json';

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px){
    flex-wrap: wrap;
  }

  > div img{
    width:100%;
    min-width: 300px;
  }
`;


class Img3 extends React.Component{

   render(){
     console.log(DataImg3);
     return(
       <ImageBox>
         {
           DataImg3.map((data)=>{
             return (<div key={data.id}>
               <img src={data.image} />
             </div>)
           })
         }


       </ImageBox>
     )
   }

}
export default Img3;
