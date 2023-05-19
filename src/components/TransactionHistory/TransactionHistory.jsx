import css from './TransactionHistory.module.css';
import transactions from '../../transactions.json';
import PropTypes from 'prop-types';

export const TransactionHistory = () => {
  return (
    <table className={css.transaction__history}>
      <thead className={css.transaction__head}>
        <tr>
          <th className={css.row__head}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({id, type, amount, currency}) => {
          return <tr key={id} className={css.transactions_list}>
            <td className={css.transactions}>{type}</td>
            <td className={css.transactions}>{amount}</td>
            <td className={css.transactions}>{currency}</td>
          </tr>})}   
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  id:PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency:PropTypes.string
}