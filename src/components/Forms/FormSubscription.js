import React from 'react';
import styled, {keyframes} from 'styled-components';



const Form = styled.div`
  > button.login{
    padding: 10px 20px;
    font-size: 1.2em;
    background: aliceblue;
    cursor: pointer;
    margin: 20px;
  }

  > div.loginform {
    display: block; /* Hidden by default */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
   
    padding-top: 60px;
  }

  > div > form {
    background-color: #fefefe;
    margin: 5% auto 15% auto;
    border: 1px solid #d8d3d3;

    
    max-width: 500px;
    padding: 50px 30px;
    width: 80%;
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
  >div > form > div > input::placeholder{
    font-size: 0.9rem;
    letter-spacing: 3px;
    font-weight: 600;
  }

  > div > form > div > input.submit{
    width: 103%;
    padding: 5px 0px;
    font-size: 1.2rem;
    background-color: #0093ff;
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
  nameError: '',
  emailError: '',
  msgError: ''
}

class FormSubscription extends React.Component{
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

    if(!this.state.name){
      nameError = 'Name ?' ;
    }
    if(!this.state.email){
      emailError = 'Email ?'
    }

    if(nameError || emailError){
      this.setState({nameError, emailError})
      return false;
    }

    return true;
  }


  handleOnSubmit(event){
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      this.setState(initialStates);
      console.log('name', this.state.name, 'password', this.state.email);
      alert('Okay');
    }else{
      this.setState({msgError: 'Please enter required field'});
    }

  }


  render(){
    return(
      <Form>
  
      <div className="subscription">
        
        <form onSubmit={this.handleOnSubmit}>
          
          <Msg>{this.state.msgError}</Msg>
          <div>
           
             <Msg>{this.state.nameError}</Msg>  
              <input  
                type='text' 
                name='name' 
                value={this.state.name} 
                onChange={this.handleOnChange}
                placeholder='Name' />
          </div>
          <div> 
           
            <Msg>{this.state.emailError}</Msg>  
              <input 
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder='Email' />  
          </div>
          <div className='remember'>
            <p><input type="checkbox" name='remember' /> Weekly Newsletter.</p> 
          </div>
          <div>
            <input type='submit' className='submit' value='Subscribe' />            
          </div>
          
          
        </form>
      </div>
      </Form>
    )
  }
}
export default FormSubscription;