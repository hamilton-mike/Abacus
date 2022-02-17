import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InputStyle, BtnStyle, BG, Dblock , LabelStyle} from "./SignUpFormStyles";

const SignUp = () => {
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/home')
    }

    return (
        <>
            <Dblock onSubmit={homePage}>
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
