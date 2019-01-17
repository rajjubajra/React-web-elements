import React from 'react';
import styled, {keyframes} from 'styled-components';
import ImageData from './AutoSlider.json';


/*slider animation */
const animatedBackground = keyframes`
from { background-position: 0 0; }
to { background-position: 100% 0; }
`;


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
     background-position: 0px 0px;
     background-repeat: repeat-x;
     animation: ${animatedBackground} 40s;
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


   > div.slide > div.dot-nav > ul{
     display: flex;
     justify-content: center;
   }

   > div.slide > div.dot-nav > ul > li{
     list-style: none;
     display: inline-block;
     color: #05ea78;
     margin: 10px;
   }
`;




class AutoSlider extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       image: 0,
       title: ImageData[0].title,
       dotNav: [],
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

  const slideLength = ImageData.length;

  this.interval = setInterval(() => {
      console.log('COUNTER - ',this.state.image)
        this.state.image < slideLength -1
        ? this.setState({image: this.state.image + 1})
        : this.setState({image: 0});
    }, 5000);


    for(let i = 1; i <= slideLength; i++ ){
      this.state.dotNav.push('<i className="far fa-dot-circle"></i>');
    }

    console.log(this.state.dotNav);

}



   circles = () => {
       console.log('what inside dotNav : ',this.state.dotNav);


     }

    render(){
      console.log('Cirlce: ', this.circles());
      return(

        <Wrap>
            <Arrow><div className='arrow-left' onClick={this.leftArrowClicked}></div></Arrow>
                <Slide>
                  <div
                      className='slide slide1'
                      style={{
                        backgroundImage: `url('./images/${this.state.image}.jpg')`
                      }}
                  >
                      <div className='slide-content'>
                        <span><i>{this.state.image} : </i>{this.state.title}</span>
                      </div>
                      <div className='dot-nav'>
                          <ul>
                            <li><i className="far fa-dot-circle"></i></li>
                            <li><i className="far fa-dot-circle"></i></li>
                            <li><i className="far fa-dot-circle"></i></li>
                          </ul>
                      </div>

                  </div>
                </Slide>
            <Arrow><div className='arrow-right' onClick={this.rightArrowClicked}></div></Arrow>
        </Wrap>
      )
    }
}


export default AutoSlider;
