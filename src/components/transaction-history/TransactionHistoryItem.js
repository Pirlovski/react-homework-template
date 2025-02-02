import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={s.string}>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{amount}</td>
      <td className={s.currency}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
