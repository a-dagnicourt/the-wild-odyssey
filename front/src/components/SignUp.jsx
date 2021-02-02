import { useState } from 'react';

const SignUp = () => {
  const [emailField, setEmailField] = useState('test@test.com');
  const updateEmailField = (e) => {
    setEmailField(e.target.value);
  };
  return (
    <div>
      <h1>{emailField}</h1>
      <input type="email" name="email" onChange={updateEmailField} />
    </div>
  );
};

export default SignUp;
