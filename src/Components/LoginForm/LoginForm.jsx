import React from 'react';
import { useNavigate } from 'react-router-dom'
import { InputStyle, BtnStyle, BG, Dblock, LabelStyle } from '../SignUpForm/SignUpFormStyles'

const LoginForm = () => {
  const navigate = useNavigate();

  const homePage = () => {
    navigate('/home')
  }
  return (
    <>
      <Dblock onSubmit={homePage}>
        <div>
          <LabelStyle htmlFor="uname">Username</LabelStyle>
          <InputStyle type="text" placeholder='Username' required name='uname' />
        </div>

        <div>
          <LabelStyle htmlFor="pw">Password</LabelStyle>
          <InputStyle type="password" placeholder='Password' required name='pw' />
          <InputStyle type="submit" value="Sign In" />
        </div>
      </Dblock>
    </>
  );
}

export default LoginForm
