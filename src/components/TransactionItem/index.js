// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-txt"> {title}</p>
      <p className="transaction-txt">Rs {amount}</p>
      <p className="transaction-txt"> {type}</p>
      <div className="delete-cont">
        <button
          type="button"
          className="del-btn"
          data-testid="delete"
          onClick={onDeleteTransaction}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
