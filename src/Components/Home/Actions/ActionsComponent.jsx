import React from 'react'
import { ActionsSection, AA, Actions, Btn } from './ActionsStyle';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GoGraph } from 'react-icons/go';
import { HiOutlineDocumentText} from 'react-icons/hi';

const ActionsComponent = () => {
  return (
    <ActionsSection>
        <AA>
            <Actions>
                <ul>
                    <Btn><FcMoneyTransfer size={35} /></Btn>
                    <li>Add <br /> Money</li>
                </ul>

                <ul>
                    <Btn><GoGraph size={35}  /></Btn>
                    <li>Retirement Accounts</li>
                </ul>

                <ul>
                    <Btn><HiOutlineDocumentText size={35}  /></Btn>
                    <li>More Learning...</li>
                </ul>
            </Actions>
        </AA>
    </ActionsSection>
  )
}

export default ActionsComponent
