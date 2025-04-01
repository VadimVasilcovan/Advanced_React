import React from 'react'

export default function InsertValue({dispatch, customerAmount }) {
  return (
    <div>
        <input value={customerAmount}
        onChange={(e) => dispatch({type: 'SubmitAmount', payload: Number(e.target.value)})}
        />
    </div>
  )
}
