import React from 'react'
import { creditBankAction, debitBankAction, resetBankAction } from '../redux/actions/bankActions'
import { useDispatch, useSelector } from 'react-redux'

const Bank = ({ children }) => {
  const data = useSelector((state) => state.bank)
  const dispatch = useDispatch()

  console.log(data, { children })
  return (
    <div>
      <p>{data.amount}</p>
      <button onClick={() => { dispatch(debitBankAction(100)) }}>DEBIT</button>
      <button onClick={() => { dispatch(creditBankAction(100)) }}>CREDIT</button>
      <button onClick={() => { dispatch(resetBankAction()) }}>RESET</button>
    </div>
  )
}

export default Bank