import React from 'react';
import styled, {keyframes} from 'styled-components';

const Page = styled.div`
     box-sizing: border-box;   


    > button.open-button{
      background-color: #555;
      color: white;
      padding: 16px 20px;
      border: none;
      cursor: pointer;
      opacity: 0.8;
      position: fixed;
      bottom: 23px;
      right: 28px;
      width: 280px;
    }
`;

const Form = styled.div`
  > div.form-popup{
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #f1f1f1;
    z-index: 9;
  }

  > div > form.form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }

  /* Full-width input fields */
  > div > form.form-container input[type=text], .form-container input[type=password] {
    width: 270px;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f1f1f1;
  }
  /* When the inputs get focus, do something */
  > div > form.form-container input[type=text]:focus, .form-container input[type=password]:focus {
    background-color: #ddd;
    outline: none;
  }

  /* Set a style for the submit/login button */
  > div > form.form-container .btn {
    background-color: #4CAF50;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    margin-bottom:10px;
    opacity: 0.8;
  }

  /* Add a red background color to the cancel button */
  > div > form.form-container .cancel {
    background-color: red;
  }
  
  /* Add some hover effects to buttons */
  > div > form.form-container .btn:hover, .open-button:hover {
    opacity: 1;
  }
`;
const Msg = styled.div`
`;

const initialStates = {
  name: '',
  password: '',
  nameError: '',
  passwordError: '',
  msgError: ''
}

class FormPopup extends React.Component{
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
      alert('Okay', this.state.name, '-', this.state.password);
    }else{
      this.setState({msgError: 'Please enter required field'});
    }

  }


  openPopupForm(){
    console.log('clicked');
    document.getElementById('popupForm').style.display='block';
    
  }
  closePopupForm(){
    console.log('closed clicked');
    document.getElementById('popupForm').style.display='none';
  }

  render(){
    return(
      <Page>
      
        <h2>Popup Form</h2>
        <p>Click on the button at the bottom of this page to open the contact form.</p>
        <p>Note that the button and the form is fixed - they will always be positioned to the bottom of the browser window.</p>

        <button className="open-button" onClick={this.openPopupForm}>Open Form [Popup Form]</button>

      
      <Form>
      <div className="form-popup" id="popupForm">
        <form onSubmit={this.handleOnSubmit} className="form-container">
              <h1>Login</h1>
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required /> 
              <button type="submit" className="btn">Login</button>
              <button type="button" className="btn cancel" onClick={this.closePopupForm}>Close</button>
        </form>
      </div>
      </Form>      
    </Page>
    )
  }
}
export default FormPopup;