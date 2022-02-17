import React, { useState, useEffect } from 'react'
import { OptionsSection, Options, Card, Icon } from './OptionStyles'
import { FaPiggyBank, FaBriefcaseMedical } from 'react-icons/fa'
import { HiOutlineSupport } from 'react-icons/hi'
import { Flex } from '../../../globalStyles'
const OptionsComponent = () => {
    const [text, setText] = useState(true)


    const toggleText = e => {
        e.preventDefault();
        setText(y => !y);
    }

    const none = {
        display: 'none'
    }

    const color = {
        color: 'black'
    }

    const read = (text) ? none : color;

    const btnContent = (text) ? 'Read More...' : 'Read Less...';

    return (
        <>
            <OptionsSection>
                <Options>
                    <Flex>
                        <Icon>
                            <FaPiggyBank  size={50} />
                        </Icon>

                        <Card>
                            <span>IRA: Individual Retirement Account</span>
                            <p>An individual retirement account (IRA) is a savings account with tax advantages that individuals can open to save and invest in the long term.
                                <span style={none}>Like a 401(k) account that an employee obtains as a benefit from their employer, an IRA is designed to encourage people to save for retirement. Anyone who has earned income can open an IRA and enjoy the tax benefits these accounts offer.
                                You can open an IRA through a bank, an investment company, an online brokerage, or a personal broker.</span></p>
                            <button>Read More...</button>

                        </Card>
                    </Flex>

                    <Flex>
                        <Icon>
                            <HiOutlineSupport  size={50} />
                        </Icon>

                        <Card>
                            <span>ESP: Employee Sponsored Retirement</span>
                            <p>An employer-sponsored plan is a type of benefit plan offered to employees at no or relatively low cost.
                                <span style={read}>These plans, such as a 401(k) or HSA, cover an array of services including retirement savings and healthcare. Employees who enroll in such programs capitalize on the benefit of receiving discounted services.
                                On the other hand, employers offering these plans typically benefit from tax breaks. Also, sponsoring benefits is seen as a way to recruit and retain valuable employees.</span></p>
                            <button onClick={toggleText}>{btnContent}</button>

                        </Card>
                    </Flex>

                    <Flex>
                        <Icon>
                            <FaBriefcaseMedical  size={50} />
                        </Icon>
                        <Card>
                            <span>HSA: Health Savings Account</span>
                            <p>A Health Savings Account (HSA) is a tax-advantaged savings account that is created for people who get their insurance coverage through high-deductible health plans.
                                <span style={none}>Regular contributions to the account are made by the employee or employer and can be used to pay for qualified medical expenses that are not covered by HDHPs.
                                The contributions, which have an annual cap, can be used to pay for medical, dental, and vision care as well as prescription drugs.
                                In addition, the Coronavirus Aid, Relief, and Economic Security (CARES) Act, enacted in 2020 in response to the COVID-19 pandemic, allows HSA funds to be used for over-the-counter medications without a prescription and some other health-related products.
                                Plan holders who are unsure which expenses qualify can check with their employer's HSA administrator or a pharmacist.</span></p>
                            <button>Read More...</button>
                        </Card>
                    </Flex>
                </Options>
            </OptionsSection>
        </>
    )
}

export default OptionsComponent
