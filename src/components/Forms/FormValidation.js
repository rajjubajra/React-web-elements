import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    background-color: #eee;
    display: flex;
    justify-content: center;
    margin: 50px;

    > form {
      width: 400px !important;
      padding: 50px;
      margin: 40px;
      background-color:#fff;
      display: flex;
      flex-direction: column;
    }

    > form >label{
      font-size: 1.2rem;
    }
    > form > input, form > textarea {
      font-size: 1.0rem;
      padding: 5px 10px;
      margin: 3px 0px;
      width: 100%;
      font-weight: 100;
      letter-spacing: -1px;
      border: 1px solid #ccc;
    }
    > form > textarea{
        height: 150px;
    }
    >form > input[type='submit']{
      font-size: 1.4rem;
      letter-spacing: 4px;
      font-weight: 200;
      cursor: pointer;
    }
    >form > input[type='submit']:hover{
      background-color: #000;
      color: #fff;
    }
    >form > input::placeholder{
      color: red;
    }
`;

const Msg = styled.div`
   font-size: 0.8rem;
   color: #ff0000;
   text-align: center;

`;

const initalState = {
  name: '',
  nameErr: '',
  tel: '',
  telErr: '',
  email: '',
  emailErr: '',
  msg: '',
  msgErr: ''
}

class FormValidation extends React.Component{
    constructor(props){
      super(props);
      this.state = initalState;
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  
    handleOnChange = (event) => {
      console.log('[ name - ', event.target.name, ' ] [ Value -', event.target.value, '] [ Type: ', event.target.type, ']');

        const isCheckBox = event.target.type === "checkbox";
        this.setState({[event.target.name]: 
                        isCheckBox 
                        ? event.target.checked 
                        : event.target.value });

        // if(event.target.name === 'name'){
        //   this.setState({name: event.target.value});
        // }
        // if(event.target.name === 'email'){
        //   this.setState({email: event.target.value});
        // }
        // if(event.target.name === 'tel'){
        //   this.setState({tel: event.target.value});
        // }
        // if(event.target.name === 'msg'){
        //   this.setState({msg: event.target.value});
        // }      
    }

    validate = (event)=>{
      let nameErr = '';
      let emailErr = '';
      let telErr = '';
      let msgErr = '';

      if(!this.state.email.includes('@')){
        emailErr = 'Invalid email ?';
      }
      if(this.state.name.length < 1 ){
        nameErr = 'Name?';
      }
      if(this.state.email.length < 1 ){
        emailErr = 'Email ?';
      } 
      if(this.state.tel.length < 1){
        telErr = 'Telephone ?';
      }
      if(this.state.msg.length < 10 ){
        msgErr = 'Message must be at least 10 charectors'; 
      }

      if(nameErr || emailErr || telErr || msgErr){
        this.setState({nameErr, emailErr, telErr, msgErr});
        return false;
      }
     
      return true;
    }

    handleSubmit(event){
      event.preventDefault();
      const isValide = this.validate(); 
      if(isValide){
        this.setState(initalState);
        alert(`Submited value : ${this.state.name} | ${this.state.email} | ${this.state.tel} | ${this.state.msg}`);
      }else{
        document.querySelector('.error').innerHTML = 'Please enter all requlired fields';
      }
      
      
    }

    render(){
        return(
          <Form>
            <form onSubmit={this.handleSubmit} style={{width: '400px'}}>
               <Msg className='error'></Msg> 
               <Msg>{this.state.nameErr}</Msg>
               <input    className="name"  type='text' name="name"  value={this.state.name}  onChange={this.handleOnChange}    placeholder="Name"/>
               <Msg>{this.state.emailErr}</Msg>
               <input    className="email" type='text' name="email" value={this.state.email} onChange={this.handleOnChange}    placeholder="Email"/>
               <Msg>{this.state.telErr}</Msg>
               <input    className="tel"   type='text' name="tel"   value={this.state.tel}   onChange={this.handleOnChange}    placeholder="Tel"/>
               <Msg>{this.state.msgErr}</Msg>
               <textarea style={{height: '200px', width: '100%'}}
                  className="msg"   type='textarea' name="msg"   value={this.state.msg}onChange={this.handleOnChange}    placeholder="Message" />

               <input type='submit' value="Submit"  />
             </form>
          </Form>
        )
    }

}
export default FormValidation;
