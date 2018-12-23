import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  margin: 10px 0px 150px 0px;
  >h3{
    text-align: center;
  }
`;

const ContainerOne = styled.div`
    margin: 5px;
    border: 1px solid #000;
    padding: 10px;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

    > div {
      width: 300px;
      margin: 10px 5px;
      padding: 20px;
      border: 1px solid #777;
    }
`;
const ContainerTwo = styled.div`
    margin: 5px;
    border: 1px solid #000;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
      padding: 20px;
      border: 1px solid #777;
    }
`;
const ContainerThree = styled.div`
    margin: 5px;
    border: 1px solid #000;
    padding: 10px;
    height: 200px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    > div {
      padding: 20px;
      border: 1px solid #777;
      margin: 0px 4px;
    }
`;
const ContainerFour = styled.div`
    margin: 5px;
    border: 1px solid #000;
    padding: 10px;
    min-height: 200px;

    @media(min-width:900px){
      display: flex;
      flex-direction: row;
    }
    > div {
      margin: 5px 5px;
      border: 1px solid #777;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      width: 100%;
    }
    > div > p{
      font-weight: 800;
      font-size: 2rem;
    }
`;
const ContainerFive = styled.div`
    margin: 5px;
    border: 1px solid #000;
    padding: 10px 0px;
    min-height: 200px;
    background-color: #ddd;

    @media(min-width:900px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #ff000;
    }

    > div {
      padding: 20px;
      margin: 10px 0px;
      border: 1px solid #777;
      height: auto;
      background-color: #fff;

    }
    >div:nth-child(1){
      flex-basis: 45%;
      order: 2;
    }
    >div:nth-child(2){
      flex-basis: 20%
      order: 1;
    }
    >div:nth-child(3){
      flex-basis: 20%;
      order: 3;
    }
`;
const ContainerSix = styled.div`
   display: flex;

   > section.one{
     flex: 1;
     height: 100%;
   }


   > section.two{
     flex: 1;
     display: flex;
     flex-direction: column;
   }

   > section.two > div{
     flex: 1;
   }
   > section > div {
     border: 1px solid #ccc;
     padding: 10px;
   }
   > section > div::first-letter{
     font-size: 3rem;
   }
`;


class FlexDirection extends React.Component{

  render(){
    return(
      <Block>
      <h1>Flexbox style</h1>
      <h3>One</h3>
      <ContainerOne>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
      </ContainerOne>
      <h3>Two</h3>
      <ContainerTwo>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
      </ContainerTwo>
      <h3>Three</h3>
      <ContainerThree>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
      </ContainerThree>
      <h3>Four</h3>
      <ContainerFour>
          <div><p>1</p></div>
          <div><p>2</p></div>
          <div><p>3</p></div>
          <div><p>4</p></div>
          <div><p>5</p></div>
          <div><p>6</p></div>
      </ContainerFour>
      <h3>Five</h3>
      <ContainerFive>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo
          </div>
      </ContainerFive>
      <h3>Six</h3>
      <ContainerSix>
        <section className="one">
          <div>
            Aorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
          </div>
       </section>
       <section className="two">
          <div>
            Borem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </div>
          <div>
            Corem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo.
          </div>
       </section>
      </ContainerSix>
      </Block>
    )
  }
}

export default FlexDirection;
