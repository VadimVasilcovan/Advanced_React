import React from 'react'

export default function DisplayingData({balance, loan}) {
  return (
    <div>
      <h2>Balance: {balance}</h2>
      <h2>Loan: {loan}</h2>
      </div>
  )
}
