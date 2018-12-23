import React from 'react';
import styled from 'styled-components';
import DataCall2Action_1 from './Call2Action_2.json';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  /*temp*/
  background-color: #fff;

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
          background-color: #eee;
          border-radius: 39px 39px;
          width: 100%;
          border: 2px solid #777;
       }
    }

    > div.title{
        margin-top: 10%;
        max-width: 800px;
        align-self: center;
        font-size: 5rem;
        color: #000;
        text-align: center;
        letter-spacing:2px;
        @media(max-width: 800px){
          font-size: 3rem;
        }

}
    }
    > div.text{
        margin-top: 30px;
        font-size: 1.6rem;
        font-weight: 100;
        letter-spacing: 3px;
        max-width: 800px;
        text-align: center;
        color: #333;
    }

    >div.button{
       display: flex;
       justify-content: center;
       height: 100vh;

       > button{
          align-self: flex-end;
          margin-bottom: 20px;
          padding: 10px 40px;
          background: #000;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
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
