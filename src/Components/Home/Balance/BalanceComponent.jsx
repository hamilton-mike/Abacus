import React from 'react'
import { FcSettings } from 'react-icons/fc'
import { MdNotifications } from 'react-icons/md'
import { Balance, Article, Hero, HeroArticle } from './BalanceStyles'
import { Unordered } from '../../Footer/FooterStyle'

const BalanceComponent = () => {
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

                            <span>$15,560.00</span>
                        </HeroArticle>
                    </Hero>
                </Article>
            </Balance>
        </>
    )
}

export default BalanceComponent
