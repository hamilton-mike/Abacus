import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ActionsSection, AA, Actions, Btn } from './ActionsStyle';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GoGraph } from 'react-icons/go';
import { HiOutlineDocumentText} from 'react-icons/hi';

const ActionsComponent = ({ id }) => {
    const navigate = useNavigate();

    const transaction = () => {
        navigate(`/${id}/transaction`)
    }

    const account = () => {
        navigate(`/${id}/education`)
    }

    const edu = () => {
        console.log('news api')
    }

    return (
        <ActionsSection>
            <AA>
                <Actions>
                    <ul onClick={transaction}>
                        <Btn><FcMoneyTransfer size={35} /></Btn>
                        <li>Add <br /> Transaction</li>
                    </ul>

                    <ul onClick={account}>
                        <Btn><GoGraph size={35}  /></Btn>
                        <li>Retirement <br /> Accounts</li>
                    </ul>

                    <ul onClick={edu}>
                        <Btn><HiOutlineDocumentText size={35}  /></Btn>
                        <li>More <br /> Learning...</li>
                    </ul>
                </Actions>
            </AA>
        </ActionsSection>
    )
}

export default ActionsComponent
