import TransactionList from '../components/TransactionList.jsx';
import { formatEnumLabel, formatMoney } from '../utils/formatters.js';

export default function BankAccountPage({ account, transactions, onDeposit, onWithdraw, onEdit, onTransactions }) {
  return (
    <div className="page-grid">
      <section className="content-section account-detail">
        <p className="eyebrow">{formatEnumLabel(account.accountType)}</p>
        <h2>{account.name}</h2>
        <span>{account.accountNumber}</span>

        <div className="balance-display">
          <span>Available balance</span>
          <strong>{formatMoney(account.balance)}</strong>
        </div>

        <div className="button-row">
          <button className="primary-button"
            type="button"
            onClick={() => {
              const amount = prompt('Deposit amount');
              if (amount) {
                onDeposit(amount);
              }
            }}>
            Deposit
          </button>
          <button className="secondary-button"
            type="button"
            onClick={() => {
              const amount = prompt('Withdraw amount');
              if (amount) {
                onWithdraw(amount);
              }
            }}>
            Withdraw
          </button>
          <button className="secondary-button" onClick={onEdit} type="button">
            Edit
          </button>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Account</p>
            <h2>Recent transactions</h2>
          </div>
          <button className="secondary-button" onClick={onTransactions} type="button">
            View All
          </button>
        </div>

        <TransactionList transactions={transactions} />
      </section>
    </div>
  );
}
