import React from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'

const AccountPage = () => {
  return (
      <>
        <nav>
            <ul>
                <li><BsArrowLeftCircleFill /></li>
                <li>Account Details</li>
            </ul>
        </nav>

        <section id="detail">
            <article>
                <div>
                    <h2>Account Number</h2>
                    <span>6,893,532</span>
                </div>
                <div>
                    <h2>Remaining Debt</h2>
                    <span>4,850,000</span>
                </div>
                <div>
                    <h2>Cut-off date</h2>
                    <span>25-02-2022</span>
                </div>
            </article>
        </section>

        <section id="graph">
            <h1>Balance</h1>
            <span>$15,560.00</span>
        </section>

          <sections id="recent">
              <article>
                <div>
                    <h2>Activities</h2>
                    <select name="" id="">
                        <option value="">January</option>
                        <option value="">February</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">October</option>
                        <option value="">November</option>
                        <option value="">December</option>
                    </select>
                </div>

                <div>
                    <img src="" alt="company logo" />
                    <h2>Netflix Membership</h2>
                    <span>$29.90</span>
                </div>

                <div>
                    <img src="" alt="company logo" />
                    <h2>Turkcell Invoice</h2>
                    <span>$65.90</span>
                </div>

                  <div>
                      <img src="" alt="company logo" />
                      <h2>Money Transfer</h2>
                      <span>$450.00</span>
                  </div>
              </article>
          </sections>
      </>
  )
}

export default AccountPage
