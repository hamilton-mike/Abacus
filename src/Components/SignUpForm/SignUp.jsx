import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InputStyle, LabelStyle, FormDiv, ConfirmStyle } from "./SignUpFormStyles";

const SignUp = () => {
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/home')
    }

    return (
        <>
            <div onSubmit={homePage}>
                <FormDiv>
                    <LabelStyle htmlFor="uname">Username</LabelStyle>
                    <InputStyle type="text" required name='uname'/>
                </FormDiv>

                <FormDiv>
                    <LabelStyle htmlFor="pw">Password</LabelStyle>
                    <InputStyle type="password" required name='pw'/>
                </FormDiv>

                <FormDiv>
                    <ConfirmStyle htmlFor="pw2">Confirm</ConfirmStyle>
                    <InputStyle type="password" required name='pw2'/>
                </FormDiv>

                <FormDiv>
                    <InputStyle type="submit" value="Register" />
                </FormDiv>
            </div>
        </>
    )
}

export default SignUp
