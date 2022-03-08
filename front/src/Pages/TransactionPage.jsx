import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderComponent from '../Components/Header/HeaderComponent';
import FooterComponent from '../Components/Footer/FooterComponent';

const TransactionPage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const { id } = params;

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

    useEffect(() => {
        fromBackend()
    }, [])

    return (
        <>
        {loading ? <h1>hi</h1> : (
            <>
                <HeaderComponent />
                <hi>TransactionPage</hi>
                <div style={{ position: 'absolute', bottom: 0 }}>
                    <FooterComponent id={userData._id}/>
                </div>
            </>
        )}
        </>
    )
}

export default TransactionPage
