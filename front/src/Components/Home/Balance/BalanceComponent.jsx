import React, { useEffect } from 'react'
import { FcSettings } from 'react-icons/fc'
import { MdNotifications } from 'react-icons/md'
import { Balance, Article, Hero, HeroArticle, Unordered } from './BalanceStyles'

const BalanceComponent = ({ income }) => {
    const balance = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(income);

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
