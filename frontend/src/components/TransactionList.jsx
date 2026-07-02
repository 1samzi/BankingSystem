import { formatEnumLabel, formatMoney } from '../utils/formatters.js';

export default function TransactionList({ transactions, limit }) {
  const visibleTransactions = limit ? transactions.slice(0, limit) : transactions;

  return (
    <div className="transaction-list">
      {visibleTransactions.map((transaction, index) => {
        const isDeposit = transaction.transactionType === 'DEPOSIT';
        const signedAmount = isDeposit ? transaction.amount : -transaction.amount;

        return (
          <article className="transaction-row" key={`${transaction.accountId}-${transaction.transactionType}-${transaction.amount}-${index}`}>
            <div>
              <strong>{formatEnumLabel(transaction.transactionType)}</strong>
              <span>Account #{transaction.accountNumber}</span>
            </div>
            <div className="transaction-meta">
              <strong className={isDeposit ? 'positive' : 'negative'}>
                {isDeposit ? '+' : ''}
                {formatMoney(signedAmount)}
              </strong>
            </div>
          </article>
        );
      })}
    </div>
  );
}
