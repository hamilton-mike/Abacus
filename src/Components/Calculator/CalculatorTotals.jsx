import React from 'react';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { CalcStyle, Section, Btn } from './CalculatorStyle';

const CalculatorTotals = () => {
    return (
        <Section>
            Every Month I Save
            <CalcStyle>
                <div>
                    <BiMinus size={25}/>
                </div>
                    <input type="text" />
                <div>
                    <BsPlusLg/> 
                </div>
            </CalcStyle>
            Investment Rate of Return
            <CalcStyle>
                <div>
                    <BiMinus size={25}/>
                </div>
                    <input type="text" />
                <div>
                    <BsPlusLg/> 
                </div>
            </CalcStyle>
            Retirement Age
            <CalcStyle>
                <div>
                    <BiMinus size={25}/>
                </div>
                    <input type="text" />
                <div>
                    <BsPlusLg/> 
                </div>
            </CalcStyle>
            Years In Retirement
            <CalcStyle>
                <div>
                    <BiMinus size={25}/>
                </div>
                    <input type="text" />
                <div>
                    <BsPlusLg/> 
                </div>
            </CalcStyle>
            Other Income
            <CalcStyle>
                <div>
                    <BiMinus size={25}/>
                </div>
                    <input type="text" />
                <div>
                    <BsPlusLg/> 
                </div>
            </CalcStyle>
            Monthly Retirement Spending
            <CalcStyle>
                <div>
                    <BiMinus size={25}/>
                </div>
                    <input type="text" />
                <div>
                    <BsPlusLg/> 
                </div>
            </CalcStyle>
            <Btn>Calculate</Btn>
        </Section>
    )
        
}

export default CalculatorTotals