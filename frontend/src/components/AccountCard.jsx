import { formatMoney } from '../utils/formatters.js';

export default function AccountCard({ account, onOpen }) {
  return (
    <article className="account-card">
      <div>
        <p className="eyebrow">{account.type}</p>
        <h3>{account.name}</h3>
        <span>{account.accountNumber}</span>
      </div>

      <strong>{formatMoney(account.balance)}</strong>

      <div className="button-row">
        <button className="secondary-button" onClick={() => onOpen(account.accountId)} type="button">
          Details
        </button>
        <button className="primary-button" type="button">
          Deposit
        </button>
        <button className="secondary-button" type="button">
          Withdraw
        </button>
      </div>
    </article>
  );
}
