import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { RiTicket2Fill } from 'react-icons/ri'
import { MdNotificationsActive } from 'react-icons/md'
import { MdOutlineSettingsInputComposite } from 'react-icons/md'
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'

const SettingsPage = () => {
  return (
    <>
        <HeaderComponent />
        <nav>
            <h1>Settings</h1>

            <form action="">
                <div>
                    <HiSearch />
                    <input type="text" placeholder='Search'/>
                </div>
            </form>
        </nav>

        <section id="profile-setting">
            <article>
                <div><MdEmail /></div>
                <div><CgProfile /></div>
            </article>
        </section>

        <section id="account-setting">
            <article>
                <div>
                    <RiTicket2Fill />
                    <h3>Product Preferences</h3>
                </div>

                <div>
                    <MdNotificationsActive />
                    <h3>Notification Settings</h3>
                </div>

                <div>
                      <MdOutlineSettingsInputComposite />
                    <h3>QR Settings</h3>
                </div>
            </article>
        </section>

        <FooterComponent />
    </>
  )
}

export default SettingsPage
