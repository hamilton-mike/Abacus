import React, { useState, useEffect } from 'react'
import { RecentSection, Activities, Transactions, HeaderOne } from './RecentStyles';
import { FaCoins } from 'react-icons/fa'
import axios from 'axios'


const RecentComponent = ({ id }) => {
  const [trans, setTrans] = useState([]);

  const getActions = async () => {
    try {
      const actions = await axios(`http://localhost:9000/action`);
      const userTransactions = actions.data.filter(obj => obj.user === id)
      setTrans(userTransactions)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getActions()
  }, [])

  return (
    <>
      <HeaderOne>Recent Activities</HeaderOne>
      <RecentSection>
        <Activities>
        {trans.map(action => (
          <Transactions>
            <FaCoins style={{ marginTop: '1.5em' }} />
            <ul key={action._id}>
              <li>{action.name.toUpperCase()}</li>
              <li>{action.date}</li>
            </ul>
            <span>- ${action.amount}</span>
          </Transactions>
        ))}
        </Activities>
      </RecentSection>
    </>
  )
}

export default RecentComponent
