import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InputStyle, LabelStyle, FormDiv, ConfirmStyle, EmailStyle } from "./SignUpFormStyles";

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
                    <EmailStyle htmlFor="pw">Email</EmailStyle>
                    <InputStyle type="email" required name='email'/>
                </FormDiv>

                <FormDiv>
                    <LabelStyle htmlFor="pw">Password</LabelStyle>
                    <InputStyle type="password" required name='pw' />
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
// After signup do popup so user can fill form for app

export default SignUp
