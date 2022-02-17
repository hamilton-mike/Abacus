import React from 'react'
import { DetailSection, AccountStyle, Title, Statement, Underline, Info } from './DetailStyle'

const DetailsComponent = () => {
  return (
      <DetailSection>
          <AccountStyle>
            <Title>Account Details</Title>

            <Statement>
                <Underline>Account Number</Underline>
                <span>6,893,532</span>
            </Statement>

            <Statement>
                <h4>Remaining Debt</h4>
                <span>4,850,000</span>
            </Statement>

            <Statement>
                <h4>Cut-off date</h4>
                <span>25-02-2022</span>
            </Statement>
          </AccountStyle>
          <hr />
      </DetailSection>
  )
}

export default DetailsComponent
