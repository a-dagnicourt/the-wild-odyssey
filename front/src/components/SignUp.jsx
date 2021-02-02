import { useState } from 'react';

const SignUp = () => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [passwordCheckField, setPasswordCheckField] = useState('');
  const [firstnameField, setFirstnameField] = useState('');
  const [lastnameField, setLastnameField] = useState('');

  const [formData, setFormData] = useState({});
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailField(e.target.value);
        break;
      case 'password':
        setPasswordField(e.target.value);
        break;
      case 'passwordCheck':
        setPasswordCheckField(e.target.value);
        break;
      case 'firstname':
        setFirstnameField(e.target.value);
        break;
      case 'lastname':
        setLastnameField(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    setSubmitError(false);
    e.preventDefault();
    if (passwordField === passwordCheckField) {
      setFormData({
        email: emailField,
        password: passwordField,
        name: firstnameField,
        lastname: lastnameField,
      });
      return formData;
    }
    return setSubmitError(true);
  };

  console.log(formData);

  return (
    <div>
      <h1>
        {submitError ? 'Passwords are not matching' : JSON.stringify(formData)}
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <input type="password" name="passwordCheck" onChange={handleChange} />
        <input type="text" name="firstname" onChange={handleChange} />
        <input type="text" name="lastname" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignUp;
