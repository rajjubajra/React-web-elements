import React,  { Component } from 'react';
import FullScreenSlider from './FullScreenSlider';
import AutoSlider from './AutoSlider';
import Carousel from './Carousel';





class ImageSlider extends Component{

  render(){
    return(
      <div>
        <Carousel />
        <AutoSlider />
        <FullScreenSlider />
      </div>
    )
  }

}


export default ImageSlider;
