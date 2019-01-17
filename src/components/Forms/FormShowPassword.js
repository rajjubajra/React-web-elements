import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    input{
      padding: 5px;
      font-size: 1.2rem;
      margin:3px;
      font-weight: 100;
    }
    
`;

class FormShowPassword extends React.Component{
  constructor(){
    super();
    this.state = {
      type: 'password'
    }
  }
  
  showPassword = () =>{
    if(this.state.type === 'password'){
      this.setState({type: 'text'});
    }else{
      this.setState({type: 'password'});
    }
    // let inputType = document.getElementById("myInput");
    //   if (inputType.type === "password") {
    //     inputType.type = "text";
    //   } else {
    //     inputType.type = "password";
    //   }
  }

  render(){
    return(
      <Form>
        <h3>Password visibility:</h3>

        <p>Password: 
          <input name="password" type={this.state.type} value="notAPassword" id="myInput" />
        </p> 
        <p>
          <span class="checkmark"></span>
          <input type="checkbox" onClick={this.showPassword} />Show Password
        </p>

      </Form>
    )
  }
}
export default FormShowPassword;