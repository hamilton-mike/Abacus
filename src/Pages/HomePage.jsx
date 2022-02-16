import React from 'react'
import { FcSettings } from 'react-icons/fc'
import { MdNotifications } from 'react-icons/md'
import FooterComponent from '../Components/Footer/FooterComponent'


const HomePage = () => {
    console.log('hello from the pther side');
  return (
    <>
        <nav>
            <ul>
                <li><FcSettings /></li>
                <li>Home</li>
                <li><MdNotifications /></li>
            </ul>
        </nav>

        <section id='hero'>
            <article>
                <h1>Balance</h1>
                <span>15,560.00</span>
                <ul>
                    <li>5282</li>
                    <li>3000</li>
                    <li>1445</li>
                    <li>3286</li>
                </ul>
            </article>
        </section>

        <section id="actions">
            <article>
                <div>
                    <img src="" alt="icon" />
                    <span>Send Money</span>
                </div>
                <div>
                    <img src="" alt="icon" />
                    <span>QR Actions</span>
                </div>
                <div>
                    <img src="" alt="icon" />
                    <span>Pay Bill</span>
                </div>
            </article>
        </section>

        <sections id="recent">
            <article>
                <h1>Recent Activities</h1>

                <div>
                    <img src="" alt="company logo" />
                    <h2>Netflix Membership</h2>
                    <span>$29.90</span>
                </div>
                <div>
                    <img src="" alt="company logo" />
                    <h2>Turkcell Invoice</h2>
                    <span>$65.90</span>
                </div>
            </article>
        </sections>

        <FooterComponent />
    </>
  )
}

export default HomePage
