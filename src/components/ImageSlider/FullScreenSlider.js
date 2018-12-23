import React from 'react';
import styled from 'styled-components';
import ImageData from './ImageData';


const Wrap = styled.div`
    margin: 0px; padding: 0px; width: 100%; height: 100vh; overflow-x: hidden;
    position: relative;
`;
const Arrow = styled.div`
  > div{
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -50px;
    width:0;
    height:0;
    border-style:solid;
  }

  > div.arrow-left{
    border-width: 30px 40px 30px 0px;
    border-color: transparent #fff transparent transparent;
    left: 0;
    margin-left: 30px;
  }
  > div.arrow-right{
    border-width: 30px 0px 30px 40px;
    border-color: transparent transparent transparent #fff;
    right: 0;
    margin-right: 30px;
  }
`;
const Slide = styled.div`

   > div.slide{
     margin: 0px; padding: 0px; width: 100%; height: 100vh; overflow-x: hidden;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
   }


   > div > div.slide-content{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
   }

   > div > div.slide-content > span{
      font-size: 5rem;
      color: #fff;
   }
`;

class FullScreenSlider extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       image: 0,
       title: ImageData[0].title
     }
   }


rightArrowClicked = () => {
  const count = ImageData.length - 1;
  if(this.state.image >= count ){
    this.setState({image: this.state.image})
    this.setState({title: ImageData[this.state.image].title})
  }else{
    this.setState({image: this.state.image +1 });
    this.setState({title: ImageData[this.state.image + 1].title})
  }
}

leftArrowClicked = () => {
  const count = ImageData.length - 1;
  if(this.state.image > 0){
  this.setState({image: this.state.image -1});
  this.setState({title: ImageData[this.state.image -1].title})
    }else{
      this.setState({image: this.state.image});
      this.setState({title: ImageData[this.state.image].title})
    }
}



componentDidMount(){
  // const count = this.state.image;
   // console.log('image:', this.state.image);

}


    render(){

      return(
        <Wrap>
            <Arrow><div className='arrow-left' onClick={this.leftArrowClicked}></div></Arrow>
                <Slide>
                  <div
                      className='slide slide1'
                      style={{ backgroundImage: `url('./images/${this.state.image}.jpg')`}}
                  >
                      <div className='slide-content'>
                        <span>{this.state.title}</span>
                      </div>
                  </div>
                </Slide>
            <Arrow><div className='arrow-right' onClick={this.rightArrowClicked}></div></Arrow>
        </Wrap>
      )
    }
}


export default FullScreenSlider;
