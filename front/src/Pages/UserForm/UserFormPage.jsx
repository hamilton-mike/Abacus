import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, Article, FormDiv, Radio, FormSection, InputStyle, Percentage } from './UserFormStyles';
import axios from 'axios';

const UserFormPage = () => {
    const init = { name: '', income: 0, debt: 0, age: 0 }
    const [userInput, setUserInput] = useState(init);
    const [id, setId] = useState(null);
    const navigate = useNavigate();

    const handleChange = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();

        const values = Object.values(userInput);
        const keys = Object.keys(userInput);

        for (let i = 1; i < values.length && i < keys.length; i++) {
            let str = values[i];
            let num = parseInt(str);
            userInput[keys[i]] = num;
        }

        userData(userInput);
    }


    const abacus = async () => {
        try {
            const users = await axios('http://localhost:9000/user/first');
            const usersArray = users.data;
            const { _id } = usersArray;
            console.log(usersArray);
            setId(_id)
        } catch (error) {
            console.error(error);
        }
    }

    const userData = async obj => {
        try {
            const { name, income, debt, age } = obj;
            await axios.put(`http://localhost:9000/user/${id}`, {
                name,
                income,
                debt,
                age
            });
            navigate('/home')
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        userData()
        abacus()
    })

    return (
        <>
            <Section>
                <Article>
                    <Percentage>
                        <h1>Set up you Abacus Account</h1>
                        <p>Sixty percent of Millennials plan to retire at age 65 or sooner, including 26 percent who plan to retire at age 65 and 34 percent who plan to do so even sooner</p>
                    </Percentage>


                    <FormDiv>
                        <form onSubmit={handleSubmit}>
                            <FormSection>
                                <InputStyle type="text" placeholder='name' name='name' required onChange={handleChange} />
                            </FormSection>

                            <FormSection>
                                <InputStyle type="text" placeholder='income' name='income' required onChange={handleChange} />
                            </FormSection>

                            <FormSection>
                                <InputStyle type="text" placeholder='debt' name='debt' required onChange={handleChange} />
                            </FormSection>

                            <FormSection>
                                <InputStyle type="text" placeholder='age' name='age' required onChange={handleChange} />
                            </FormSection>

                            <Radio>
                                <input type="radio" required />
                                <p>I agree that Abacus is an amazing App!</p>
                            </Radio>

                            <FormSection>
                                <InputStyle type="submit" placeholder='Submit' />
                            </FormSection>
                        </form>
                    </FormDiv>
                </Article>
            </Section>
        </>
    )
}

export default UserFormPage
