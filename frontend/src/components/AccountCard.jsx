import { formatEnumLabel, formatMoney } from '../utils/formatters.js';

export default function AccountCard({ account, onDeposit, onOpen, onWithdraw }) {
  return (
    <article className="account-card">
      <div>
        <p className="eyebrow">{formatEnumLabel(account.accountType)}</p>
        <h3>{account.name}</h3>
        <span>#{account.accountNumber}</span>
      </div>

      <strong>{formatMoney(account.balance)}</strong>

      <div className="button-row">
        <button className="secondary-button" onClick={() => onOpen(account.id)} type="button">
          Details
        </button>
          <button
              className="primary-button"
              onClick={() => {
                  const amount = prompt('Deposit amount');
                  if (amount) {
                      onDeposit(account.id, amount);
                  }
              }}
              type="button"
          >
              Deposit
          </button>
          <button
              className="secondary-button"
              onClick={() => {
                  const amount = prompt('Withdraw amount');
                  if (amount) {
                      onWithdraw(account.id, amount);
                  }
              }}
              type="button"
          >
              Withdraw
          </button>
      </div>
    </article>
  );
}
