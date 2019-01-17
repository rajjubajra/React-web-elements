import React from 'react';
import styled from 'styled-components';


const Form = styled.div`
    box-sizing: border-box;

    > form > div{
      display: flex;
    }

    > form.example > div > input[type=text] {
      padding: 10px;
      font-size: 17px;
      border: 1px solid grey;
      float: left;
      width: 60%;
      background: #f1f1f1;
    }

    > form.example > div > button {
      float: left;
      width: 100px;
      padding: 10px;
      background: #2196F3;
      color: white;
      font-size: 17px;
      border: 1px solid grey;
      border-left: none;
      cursor: pointer;
    }
    
    > form.example > div > button:hover {
      background: #0b7dda;
    }
    
    > form.example::after {
      content: "";
      clear: both;
      display: table;
    }

`;

class FormSearchButton extends React.Component{

  render(){
    return(
      <Form>
        <h2>Search Button</h2>

          <p>Full width:</p>
          <form className="example" >
            <div>
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </form>
      </Form>
    )
  }
}
export default FormSearchButton;