import React from 'react'
import { GoGraph } from 'react-icons/go'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { AiFillHome } from 'react-icons/ai'

const FooterComponent = () => {
  return (
        <footer >
            <ul>
                <li><AiFillHome /></li>
                <li><GoGraph /></li>
                <li><BsFillCreditCard2BackFill /></li>
                <li><CgProfile /></li>
            </ul>
        </footer >
  )
}

export default FooterComponent
