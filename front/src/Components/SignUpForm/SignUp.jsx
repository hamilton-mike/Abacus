import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { InputStyle, LabelStyle, FormDiv, ConfirmStyle, EmailStyle } from "./SignUpFormStyles";
import axios from 'axios';

const SignUp = () => {
    const init = { email: '', pw: '', pw2: '' };
    // const navigate = useNavigate();
    // navigate('/home')
    const [userInput, setUserInput] = useState(init)

    const handleChange = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        makeUser(userInput);
    }

    const makeUser = async obj => {
        try {
            const formData = await axios.post('http://localhost:9000/user/signup', {
                username: obj.email,
                password: obj.pw2
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormDiv>
                    <EmailStyle htmlFor="pw">Email</EmailStyle>
                    <InputStyle type="email" required name='email' onChange={handleChange} />
                </FormDiv>

                <FormDiv>
                    <LabelStyle htmlFor="pw">Password</LabelStyle>
                    <InputStyle type="password" required name='pw'  onChange={handleChange} />
                </FormDiv>

                <FormDiv>
                    <ConfirmStyle htmlFor="pw2">Confirm</ConfirmStyle>
                    <InputStyle type="password" required name='pw2' onChange={handleChange} />
                </FormDiv>

                <FormDiv>
                    <InputStyle type="submit" value="Register" />
                </FormDiv>
            </form>
        </>
    )
}
// After signup do popup so user can fill form for app

export default SignUp
