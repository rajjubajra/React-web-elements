import React from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import FormContact from './FormContact';
import FormValidation from './FormValidation';
import FormwithIcons    from './FormwithIcons';
import FormwithIconsMsg from './FormwithIconsMsg';
import FormSubscription from './FormSubscription';
import FormPopup from './FormPopup';
import FormSearch from './FormSearch';
import FormSearchButton from './FormSearchButton';
import FromPasswordValidation from './FormPasswordValidation';
import FormShowPassword from './FormShowPassword';
import FormCustomCheckbox from './FormCustomCheckbox';





class Form extends React.Component{

  render(){
    return(
      <div>
        <h1>Forms:</h1>
        <FormContact />
        <FormRegister />
        <FormLogin />
        <FormCustomCheckbox />
        <FormShowPassword />
        <FromPasswordValidation />
        <FormSearch />
        <FormSearchButton />
        <FormPopup />
        <FormSubscription />
        <FormwithIcons />
        <FormwithIconsMsg />
        <FormValidation />
        
      </div>
    )
  }

}
export default Form;