import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputStyle, FormDiv, Dblock, LabelStyle } from '../SignUpForm/SignUpFormStyles'
import axios from 'axios';

const LoginForm = () => {
  const init = { email: '', pw: '' };
  const [userInput, setUserInput] = useState(init)
  const navigate = useNavigate();

  const handleChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('hit')
    checkCredentials(userInput)
  }

  const checkCredentials = async obj => {
    try {
      const formData = await axios.post('http://localhost:9000/user/login', {
        username: obj.email,
        password: obj.pw
      });
      navigate(`/${formData.data._id}/home`);
    } catch (error) {
      navigate('/error');
      console.error(error, 'error');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormDiv>
          <LabelStyle htmlFor="email">Username</LabelStyle>
          <InputStyle type="text" placeholder='Username' required name='email' onChange={handleChange} />
        </FormDiv>

        <FormDiv>
          <LabelStyle htmlFor="pw">Password</LabelStyle>
          <InputStyle type="password" placeholder='Password' required name='pw' onChange={handleChange} />
        </FormDiv>

        <Dblock>
          <InputStyle type="submit" value="Sign In" />
        </Dblock>
      </form>
    </>
  );
}

export default LoginForm
