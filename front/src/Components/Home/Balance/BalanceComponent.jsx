import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FcSettings } from 'react-icons/fc';
import { MdNotifications } from 'react-icons/md';
import { Balance, Article, Hero, HeroArticle, Unordered } from './BalanceStyles';

const BalanceComponent = ({ income, id }) => {
    const [newBalance, setNewBalance] = useState(null);

    const balance = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(income - newBalance);

    const getAllTransactions = async () => {
        try {
            const getRequest = await axios('http://localhost:9000/action');
            const filterById = await getRequest.data.filter(obj => obj.user === id);
            subTotal(filterById)
        } catch (error) {
            console.error(error);
        }
    }

    const subTotal = arr => {
        const remove$ = arr.map(obj => obj.amount.substring(1));
        const number = remove$.map(str => parseInt(str));
        const balance = number.reduce((acc, el) => {
            return acc += el;
        }, 0);
        setNewBalance(balance);
    }

    useEffect(() => {
        getAllTransactions()
    }, [])

    return (
        <>
            <Balance>
                <Article>
                    <Unordered>
                        <li><FcSettings /></li>
                        <li>Home</li>
                        <li><MdNotifications /></li>
                    </Unordered>

                    <Hero>
                        <HeroArticle>
                            <h1>Balance of your <br /> Abacus Account</h1>
                            <span>{balance}</span>
                        </HeroArticle>
                    </Hero>
                </Article>
            </Balance>
        </>
    )
}

export default BalanceComponent
