import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { InputStyle, LabelStyle, FormDiv, ConfirmStyle, EmailStyle } from "./SignUpFormStyles";
import axios from 'axios';

const SignUp = () => {
    const init = { email: '', pw: '', pw2: '' };
    const [userInput, setUserInput] = useState(init);
    const navigate = useNavigate();

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
            (formData.data === null) ? navigate('/') : navigate('/form');
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        makeUser()
    })

    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormDiv>
                    <EmailStyle htmlFor="email">Email</EmailStyle>
                    <InputStyle type="email" required name='email' onChange={handleChange} />
                </FormDiv>

                <FormDiv>
                    <LabelStyle htmlFor="pw">Password</LabelStyle>
                    <InputStyle type="password" required name='pw' onChange={handleChange} />
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

export default SignUp
