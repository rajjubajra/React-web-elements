import React from 'react';
import styled, {keyframes} from 'styled-components';


const animatezoom = keyframes`
  from {transform: scale(0)} 
  to {transform: scale(1)}
`;

const Form = styled.div`
  > button.openform{
    padding: 10px 20px;
    font-size: 1.2em;
    background: aliceblue;
    cursor: pointer;
    margin: 20px;
  }

  > div.popupform {
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
  > div > form > div > p{
    font-size: 0.9rem;
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
  > div > form > div > input::placeholder{
    font-size: 0.9rem;
    color: #555;
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
  
`;

const Msg = styled.div`
  color: #ff0000;
  font-size: 0.8rem;
`;

const initialStates = {
  name: '',
  email: '',
  password: '',
  repeate_password: '',
  nameError: '',
  emailError: '',
  passwordError:'',
  repeate_passwordError: '',
  msgError: ''
}

class FormRegister extends React.Component{
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
    let emailError = '';
    let passwordError = '';
    let repeate_passwordError = '';

    if(!this.state.name){
      nameError = 'Username ?' ;
    }
    if(!this.state.password){
      passwordError = 'Password ?'
    }
    if(!this.state.email){
      emailError = 'Email?';
    }
    if(!this.state.email.includes('@' && '.')){
      emailError = 'Invalid email';
    }
    if(!this.state.repeate_password){
      repeate_passwordError = 'Repeate Password';
    }

    if(nameError || passwordError || repeate_passwordError || emailError){
      this.setState({nameError, passwordError, repeate_passwordError, emailError});
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


  popupRegisterForm(){
    document.getElementById('registerform').style.display='block';
  }
  closeRegisterForm(){
    document.getElementById('registerform').style.display='none';
  }

  render(){
    return(
      <Form>
      <button className='openform' onClick={this.popupRegisterForm}>Register</button>

      <div id="registerform" className="popupform">
        
        <form onSubmit={this.handleOnSubmit}>
          <div><span onClick={this.closeRegisterForm} className="close" title="Close Login Form">&times;</span></div>
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
            <label>Email</label>
             <Msg>{this.state.emailError}</Msg>  
              <input  
                type='text' 
                name='email' 
                value={this.state.email} 
                onChange={this.handleOnChange}
                placeholder='Email' />
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
            <label>Repeat Password</label>  
            <Msg>{this.state.repeate_passwordError}</Msg>  
              <input 
                type='password'
                name='repeate_password'
                value={this.state.repeate_password}
                onChange={this.handleOnChange}
                placeholder='Repeate Password' />  
          </div>
          <div className='tandc'>
            <p>By creating an account you agree to our <a href='#'> Terms & Privacy</a>.</p>
          </div>
          <div>
            <input type='submit' className='submit' value='Register' />            
          </div>
          <div className='remember'>
            <p><input type="checkbox" name='remember' /> Remember me.</p> 
          </div>
          <div>
            <p>
              <button className="cancel" onClick={this.closeRegisterForm}>Cancel</button> 
            </p>
          </div>
        </form>
      </div>
      </Form>
    )
  }
}
export default FormRegister;