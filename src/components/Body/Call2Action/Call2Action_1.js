import React from 'react';
import styled from 'styled-components';
import DataCall2Action_1 from './Call2Action_1.json';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  /*temp*/
  background-color: #6095f5;

`;

const Section = styled.section`
    display: flex;
    flex-direction: column;

    > div.logo{
       margin-top: 30px;
       align-self: center;
       max-width: 50px;
       > img{
          padding: 10px;
          background-color: #d2d2d2;
          border-radius: 39px 39px;
          width: 100%;
          border: 2px solid #6095f5;
          box-shadow: 2px 2px 4px #000;
       }
    }

    > div.title{
        margin-top: 20%;
        align-self: center;
        font-size: 3rem;
        text-shadow: 2px 3px 4px #000;
        color: peachpuff;
        font-weight: 200;
}
    }
    > div.text{
        margin-top: 30px;
        font-size: 1.2rem;
        font-weight: 100;
        letter-spacing: 1px;
        max-width: 700px;
        text-align: center;
        color: whitesmoke;
    }

    >div.button{
       display: flex;
       justify-content: center;
       height: 100vh;

       > button{
          align-self: flex-end;
          margin-bottom: 20px;
          padding: 10px 40px;
          background: #1790f9;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: 2px 2px 3px #000;
       }

    }


`;

class Call2Action_1 extends React.Component{


  componentDidMount(){
    DataCall2Action_1.map((data)=>{

    })
  }

  render(){
    return(
        <Container>
        {
          DataCall2Action_1.map((data)=>{
            return(
                <Section key={data.id}>
                    <div className="logo"><img src={data.logo} /></div>
                    <div className="title">{data.title}</div>
                    <div className="text">{data.text}</div>
                    <div className="button"><button>{data.button}</button></div>
                </Section>
              )
          })

        }
        </Container>
    );
  }
}
export default Call2Action_1;
