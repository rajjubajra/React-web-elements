import React from 'react';
import styled from 'styled-components';


const Form = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    > form {
      width: 400px;
      padding: 50px 30px;
      border: 1px solid #ccc;
    }

    > form > div{
        display:flex;
        flex-direction: row;
        margin-bottom: 10px;
    }

    > form > div > i.fa{
      font-size: 2.0rem;
      width: 40px;
      padding: 10px;
      background-color: bisque;
      text-align: center;
    }

    > form > div > input{
      width: 100%;
      padding: 0px 10px;
      border: 1px solid #ccc;
    }
    >form > div > input::placeholder{
      font-size: 1.0rem;
      color: wheat;
    }

    > form > button{
      width: 100%;
      padding: 10px 0px;
      font-size: 1.0rem;
      font-weight: 100;
      letter-spacing: 2px;
      background: bisque;
      cursor: pointer;
    }


`;


class FormwithIcons extends React.Component{


  render(){
    return(
      <Form>

        
       <form>
         <div><p>Form with Icons</p></div>
       <div>
          <i className="fa fa-user icon"></i>
          <input type="text" placeholder="Username" name="usrnm" />
        </div>

        <div>
          <i className="fa fa-envelope icon"></i>
          <input type="text" placeholder="Email" name="email" />
        </div>
  
        <div>
          <i className="fa fa-key icon"></i>
          <input  type="password" placeholder="Password" name="psw" />
        </div>

       <button type="submit" >Register</button>
       </form>
      </Form>
    )
  }
}
export default FormwithIcons;