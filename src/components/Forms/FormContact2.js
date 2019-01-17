import React from 'react';
import ReactDom from 'react-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import styled, {keyframes} from 'styled-components';


const ContactPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 100px 0px;
    justify-content: center;

    > form {
      margin: 0px auto;
      width: 460px;
      display: flex;
      flex-direction: column;
    }

    > form > textarea{
      border: 1px solid #c3c3c3
      margin-bottom: 20px;
      height: 200px;
    }

    > form > button{
      width: 200px;
      height: 50px;
      background-color: wheat;
      margin: 15px 0px;
    }

    
    

`;

const SITE_KEY = "6LcWp4gUAAAAAC43piE31voViYWu5LIRcnSoixbV";
const DELAY = 1500;


class Contact extends React.Component{
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }

  handleChange = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };




  render(){
    const { value, callback, load, expired } = this.state || {};
    return(
      <ContactPage>
        
       
        {/* <h2>
          NOTE: initial load delayed <em>{DELAY / 1000}sec</em> to demonstrate
          callback
        </h2>
        <h3>Recaptcha loaded callback: {callback}</h3>
        <h5>Recaptcha value: {value}</h5>
        <h5>Expired: {expired}</h5> */}
        
        <form>
            <h3>Contact Me</h3>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea />
            {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="dark"
            ref={this._reCaptchaRef}
            sitekey={SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
            <button>Submit</button>
        </form>
      </ContactPage>
    )
  }
}
export default Contact;


