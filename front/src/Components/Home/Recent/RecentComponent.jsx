import React from 'react'
import { RecentSection, Activities, Transactions } from './RecentStyles';
import { FaCoins } from 'react-icons/fa'

const RecentComponent = () => {
  return (
    <RecentSection>
      <Activities>
        <h1>Recent Activities</h1>

        <Transactions>
            <FaCoins style={{ margin: '1.5em 0' }}/>
            <ul>
              <li>Roth IRA auto pay</li>
                <li>02.16.2022</li>
            </ul>
            <span>- $29.90</span>
        </Transactions>

        <Transactions>
          <FaCoins style={{ margin: '1.5em 0' }} />
            <ul>
              <li>10% Xfer to IRA"</li>
                <li>02.16.2022</li>
            </ul>
            <span> - $16.00</span>
        </Transactions>
      </Activities>
    </RecentSection>
  )
}

export default RecentComponent
