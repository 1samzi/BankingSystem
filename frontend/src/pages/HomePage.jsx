import AccountCard from '../components/AccountCard.jsx';
import StatTile from '../components/StatTile.jsx';
import TransactionList from '../components/TransactionList.jsx';
import { formatMoney } from '../utils/formatters.js';

export default function HomePage({ accounts, transactions, onCreateAccount, onOpenAccount, onOpenTransactions, onWithdraw, onDeposit }) {
  const totalBalance = accounts.reduce((total, account) => total + account.balance, 0);
  const deposits = transactions.filter((transaction) => transaction.transactionType === 'DEPOSIT').length;
  const withdrawals = transactions.filter((transaction) => transaction.transactionType === 'WITHDRAWAL').length;

  return (
    <div className="dashboard-grid">
      <section className="content-section accounts-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Accounts</p>
            <h2>Your balances</h2>
          </div>
          <button className="primary-button" onClick={onCreateAccount} type="button">
            New Account
          </button>
        </div>

        <div className="stats-grid">
          <StatTile label="Total balance" value={formatMoney(totalBalance)} />
          <StatTile label="Deposits" value={deposits} />
          <StatTile label="Withdrawals" value={withdrawals} />
        </div>

        <div className="account-list">
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <AccountCard account={account}
               key={account.id}
               onDeposit={onDeposit}
               onOpen={onOpenAccount}
               onWithdraw={onWithdraw}/>
            ))
          ) : (
            <p className="empty-state">No accounts yet. Create one to start tracking balances.</p>
          )}
        </div>
      </section>

      <section className="content-section transactions-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Transactions</p>
            <h2>Recent activity</h2>
          </div>
          <button className="secondary-button" onClick={onOpenTransactions} type="button">
            View All
          </button>
        </div>

        <TransactionList transactions={transactions} limit={4} />
      </section>
    </div>
  );
}
