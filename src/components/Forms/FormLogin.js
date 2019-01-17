import React from 'react';
import styled, {keyframes} from 'styled-components';


const animatezoom = keyframes`
  from {transform: scale(0)} 
  to {transform: scale(1)}
`;

const Form = styled.div`
  > button.login{
    padding: 10px 20px;
    font-size: 1.2em;
    background: aliceblue;
    cursor: pointer;
    margin: 20px;
  }

  > div.loginform {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  > div > form {
      background-color: #fefefe;
      margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
      border: 1px solid #888;
      max-width: 400px;
      width: 80%; /* Could be more or less, depending on screen size */
      -webkit-animation: ${animatezoom} 0.6s;
      animation: ${animatezoom} 0.6s;
      padding: 50px 30px; 
  }

  > div > form > div {
    display: block;
  }
  >div > form > div > span.close{
    font-size: 1.7rem;
    font-weight: 900;
    float: right;
    position: relative;
    top: -25px;
    color: #ff0000;
    cursor: pointer;
  }
  >div > form > div > label{
    display: block;
    margin: 5px 0px;
    font-weight: 100;
  }
  > div > form > div > input{
    display: block;
    padding: 3px 5px;
    font-size: 1.2rem;
    margin-bottom: 20px;
    width: 100%;
  }

  > div > form > div > input.submit{
    width: 103%;
    padding: 5px 0px;
    font-size: 1.2rem;
    background-color: #0093ff;
  }

  > div > form > div > p >button.cancel{
    padding: 10px 15px;
    font-size: 1.0rem;
    letter-spacing: 1px;
    background-color: #e21414;
    color: #ccc;
    cursor: pointer;
  }
  > div > form > div > p  > i.forgot{
    float: right;
    margin-right: 20px;
    font-size:1.0rem;
    cursor: pointer;
  }
  > div > form > div > p > i.forgot:hover{
    text-decoration: underline;
  }
`;

const Msg = styled.div`
  color: #ff0000;
  font-size: 0.8rem;
`;

const initialStates = {
  name: '',
  password: '',
  nameError: '',
  passwordError: '',
  msgError: ''
}

class FormLogin extends React.Component{
  constructor(){
    super();
    this.state = initialStates;

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  

  handleOnChange(event){
    const isCheckBox = event.target.type === 'checkbox';
      this.setState({[event.target.name]: 
                        isCheckBox 
                        ? event.target.checked 
                        : event.target.value});
  }

  validate = (event) =>{
    let nameError = '';
    let passwordError = '';

    if(!this.state.name){
      nameError = 'Username ?' ;
    }
    if(!this.state.password){
      passwordError = 'Password ?'
    }

    if(nameError || passwordError){
      this.setState({nameError, passwordError})
      return false;
    }

    return true;
  }


  handleOnSubmit(event){
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      this.setState(initialStates);
      console.log('name', this.state.name, 'password', this.state.password);
      alert('Okay', this.state.name, '- ', this.state.password);
    }else{
      this.setState({msgError: 'Please enter required field'});
    }

  }


  popupLoginForm(){
    document.getElementById('loginform').style.display='block';
  }
  closeLoginForm(){
    document.getElementById('loginform').style.display='none';
  }

  render(){
    return(
      <Form>
      <button className='login' onClick={this.popupLoginForm}>Login</button>

      <div id="loginform" className="loginform">
        
        <form onSubmit={this.handleOnSubmit}>
          <div><span onClick={this.closeLoginForm} className="close" title="Close Login Form">&times;</span></div>
          <Msg>{this.state.msgError}</Msg>
          <div>
            <label>Name</label>
             <Msg>{this.state.nameError}</Msg>  
              <input  
                type='text' 
                name='name' 
                value={this.state.name} 
                onChange={this.handleOnChange}
                placeholder='Name' />
          </div>
          <div> 
            <label>Password</label>  
            <Msg>{this.state.passwordError}</Msg>  
              <input 
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleOnChange}
                placeholder='Password' />  
          </div>
          <div>
            <input type='submit' className='submit' value='Login' />            
          </div>
          <div className='remember'>
            <p><input type="checkbox" name='remember' /> Remember me.</p> 
          </div>
          <div>
            <p>
              <button className="cancel" onClick={this.closeLoginForm}>Cancel</button> 
              <i className="forgot">Forgot Password ?</i>
            </p>
          </div>
        </form>
      </div>
      </Form>
    )
  }
}
export default FormLogin;