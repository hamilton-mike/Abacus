import React, { useState, useEffect } from 'react'
import { RecentSection, Activities, Transactions } from './RecentStyles';
import { FaCoins } from 'react-icons/fa'
import axios from 'axios'


const RecentComponent = ({ id }) => {
  const [trans, setTrans] = useState([]);

  const getActions = async () => {
    try {
      const actions = await axios(`http://localhost:9000/action`);
      setTrans(actions.data)
      console.log(trans, id,  'act');
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getActions()
  }, [])

  return (
    <RecentSection>
      <Activities>
        <h1>Recent Activities</h1>

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
