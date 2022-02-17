import React from 'react'
import { InputStyle, BtnStyle, BG, Dblock , LabelStyle} from "./SignUpFormStyles.js";


const SignUp = () => {
  return (
    <>
        <Dblock method='POST'>
            <div>
                <LabelStyle htmlFor="uname">Username</LabelStyle>
                <InputStyle type="text" placeholder='Username' required name='uname'/>
            </div>

            <div>
                <LabelStyle htmlFor="pw">Password</LabelStyle>
                <InputStyle type="password" placeholder='Password' required name='pw'/>
            </div>

            <div>
                <LabelStyle htmlFor="pw2">Confirm</LabelStyle>
                <InputStyle type="password" placeholder='Confirm Password' required name='pw2'/>
                <InputStyle type="submit" value="Register" />
            </div>
        </Dblock>
    </>
  )
}

export default SignUp
