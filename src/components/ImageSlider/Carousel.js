import React from 'react';
import styled from 'styled-components';
import ImageData from './Carousel.json';

const SlideContainer = styled.div`
   display: flex;
   width: 800px;
   flex-direction: column;
   justify-content: center;

   > section{
     
   }

   > section > div > img{
     width: 100%;
   }

   > section> a.next, section> a.prev{
     position: absolute;
     top: 50%;
     padding: 10px;
     background-color: #ccc;
     cursor: pointer;
   }

   a.next{
     right: 0;

   }
   
`;


class Carousel extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      img: 0,
    }
  }

  componentDidMount(){
    const arrLength = ImageData.length;
    console.log('Array length', arrLength);    
  }
  nextSlide(){
    
    console.log('next slide');
  }
  prevSlide(){
   
    console.log('prev slide');
  }

  render(){
    return(
      <SlideContainer>
        <section>
          {
                <div className='slider fade'>
                  <img src={ImageData[this.state.img].imgurl}  />
                  <div className='caption'>{ImageData[this.state.img].caption}</div>
                </div>    
          }
          <a className="prev" onClick={this.prevSlide}>&#10094;</a>
          <a className="next" onClick={this.nextSlide}>&#10095;</a> 
        </section> 
      </SlideContainer>
    )
  }
}
export default Carousel;