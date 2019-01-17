import React from 'react';
import styled, {keyframes} from 'styled-components';
import Data from './LandingPage1.json';


const MoveRight = keyframes`
      from {left: -200px;}
      to {left: 0px;}
`;
const FadeOut = keyframes`
      0% {opacity: 0; rotate: 0deg;}
      100% {opacity: 1; rotate: 180deg;}
`;
const MoveUp = keyframes`
     from {top: -3000px;}
     to{top: 0px;}
`;



const Container = styled.div`
    > section > div {
      width: 100%;
      height: 100vh;
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

          > div.verticle-line{
            border-right: 1px solid #000;
            display: block;
            height: 200px;
            margin: 0px 20px;
            position: relative;
            -webkit-animation: ${MoveRight} 1s; /* Safari 4.0 - 8.0 */
            animation: ${MoveRight} 1s ease-in;
          }

          > div.logo{
            width: 100px;
            > img{
              width: 100%;
              opacity: 0;
              position: relative;
              -webkit-animation: ${FadeOut} 5s; /* Safari 4.0 - 8.0 */
              animation: ${FadeOut} 5s ease-out;
              animation-delay: 4s;
              animation-duration: 2s;
              animation-fill-mode: forwards;
            }
      }
`;

const Title = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1.9rem;
  position: relative;
  -webkit-animation: ${MoveUp} 2s; /* Safari 4.0 - 8.0 */
  animation: ${MoveUp} 2s ease-out;
`;
const Intro = styled.div`
  font-weight: 100;
  letter-spacing: 0.04em;
  position: relative;
  top: -3000px;
  -webkit-animation: ${MoveUp} 5s; /* Safari 4.0 - 8.0 */
  animation: ${MoveUp} 3s ease-out;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
`;


class LandingPage1 extends React.Component{
  

    render(){
      return(
        <Container>
          <section>
            {
                Data.map((data)=>{
                  return(
                    <div key={data.id} className="block">
                        <div className="logo" ><img src={data.logo} /></div>
                        <div className="verticle-line"></div>
                        <div>
                            <Title>{data.title}</Title>
                            <Intro>{data.intro}</Intro>
                        </div>
                    </div>
                  )
                })
            }
          </section>
        </Container>
      )
    }
}
export default LandingPage1;
