import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputStyle, FormDiv, Dblock, LabelStyle } from '../SignUpForm/SignUpFormStyles'
import axios from 'axios';

const LoginForm = () => {
  const init = { uname: '', pw: '' };
  const [userInput, setUserInput] = useState(init)
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/home')
  }

  const handleChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    checkCredentials(userInput)
  }

  const checkCredentials = async obj => {
    try {
      const formData = await axios.post('http://localhost:9000/user/login', {
        username: obj.uname,
        password: obj.pw
      });
      (formData.data === null) ? navigate('/') : navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormDiv>
          <LabelStyle htmlFor="uname">Username</LabelStyle>
          <InputStyle type="text" placeholder='Username' required name='uname' onChange={handleChange} />
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
