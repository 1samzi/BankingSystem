import { formatDate, formatMoney } from '../utils/formatters.js';

export default function TransactionList({ transactions, limit }) {
  const visibleTransactions = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="transaction-list">
      {visibleTransactions.map((transaction) => (
        <article className="transaction-row" key={transaction.transactionId}>
          <div>
            <strong>{transaction.description}</strong>
            <span>{transaction.accountName}</span>
          </div>
          <div className="transaction-meta">
            <strong className={transaction.amount >= 0 ? 'positive' : 'negative'}>
              {transaction.amount >= 0 ? '+' : ''}
              {formatMoney(transaction.amount)}
            </strong>
            <span>{formatDate(transaction.date)}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
