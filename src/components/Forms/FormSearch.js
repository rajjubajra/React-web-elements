import React from 'react';
import styled from 'styled-components';

const Form = styled.div`

    > form > input[type=text] {
      width: 130px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      background-color: white;
      background-image: url('searchicon.png');
      background-position: 10px 10px; 
      background-repeat: no-repeat;
      padding: 12px 20px 12px 40px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
    }

    > form > input[type=text]:focus {
      width: 70%;
    }


    
`;

class FormSearch extends React.Component{


  render(){
    return(
      <Form>
        <h3>Search Form</h3>
        <form>
            <input type="text" name="search" placeholder="Search.." />
        </form>

      </Form>
    );
  }
}
export default FormSearch;
