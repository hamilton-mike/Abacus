import React from 'react';
import { useNavigate } from 'react-router-dom'
import { InputStyle, FormDiv, Dblock, LabelStyle } from '../SignUpForm/SignUpFormStyles'

const LoginForm = () => {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/home')
  }
  return (
    <>
      <div onSubmit={homePage}>
        <FormDiv>
          <LabelStyle htmlFor="uname">Username</LabelStyle>
          <InputStyle type="text" placeholder='Username' required name='uname' />
        </FormDiv>

        <FormDiv>
          <LabelStyle htmlFor="pw">Password</LabelStyle>
          <InputStyle type="password" placeholder='Password' required name='pw' />
        </FormDiv>

        <Dblock>
          <InputStyle type="submit" value="Sign In" />
        </Dblock>
      </div>
    </>
  );
}

export default LoginForm
