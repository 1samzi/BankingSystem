import TransactionList from '../components/TransactionList.jsx';

export default function TransactionsPage({ accounts, transactions, selectedAccountId, onSelectAccount }) {
  const visibleTransactions =
    selectedAccountId === 'all'
      ? transactions
      : transactions.filter((transaction) => transaction.accountId === selectedAccountId);

  return (
    <section className="content-section page-stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Transactions</p>
          <h2>Activity history</h2>
        </div>

        <select value={selectedAccountId} onChange={(event) => {
          const value = event.target.value;
          onSelectAccount(value === 'all' ? 'all' : Number(value));
        }}>
          <option value="all">All accounts</option>
          {accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name}
            </option>
          ))}
        </select>
      </div>

      <TransactionList transactions={visibleTransactions} />
    </section>
  );
}
