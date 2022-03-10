import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';
import { Article, FormDiv, FormSection, InputStyle, Percentage, Section } from './UserForm/UserFormStyles';

const TransactionPage = () => {
    const init = { name: '', date: 0, amount: 0 }
    const [userInput, setUserInput] = useState(init)
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const handleChange = e => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        sendToBackend(userInput);
    }

    const fromBackend = async () => {
        try {
            const users = await axios('http://localhost:9000/user');
            const userById = users.data.filter(user => user._id === id);
            setUserData(userById['0']);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    const sendToBackend = async obj => {
        try {
            await axios.post('http://localhost:9000/action', {
                user: id,
                name: obj.name,
                date: obj.date,
                amount: obj.amount
            })
            navigate(`/${id}/home`)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fromBackend()
        sendToBackend()
    }, [])

    return (
        <>
        {loading ? <h1>hi</h1> : (
            <>
                <HeaderComponent />
                <Section>
                    <Article>
                        <Percentage style={{ textAlign: 'center' }}>
                            <h1>Add Transactions</h1>
                        </Percentage>

                        <FormDiv>
                            <form onSubmit={handleSubmit}>
                                <FormSection>
                                    <InputStyle type="text" placeholder='name' name='name' required onChange={handleChange} />
                                </FormSection>

                                <FormSection>
                                    <InputStyle type="date" placeholder='date' name='date' required onChange={handleChange} />
                                </FormSection>

                                <FormSection>
                                    <InputStyle type="text" placeholder='amount' name='amount' required onChange={handleChange} />
                                </FormSection>

                                <FormSection>
                                    <InputStyle type="submit" placeholder='Submit' />
                                </FormSection>
                            </form>
                        </FormDiv>
                    </Article>
                </Section>
                <FooterComponent id={userData._id} />
            </>
        )}
        </>
    )
}

export default TransactionPage
