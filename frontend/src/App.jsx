import { useMemo, useState } from 'react';
import AppShell from './components/AppShell.jsx';
import { accounts as mockAccounts, profile, transactions as mockTransactions } from './data/mockData.js';
import BankAccountPage from './pages/BankAccountPage.jsx';
import EditAccountPage from './pages/EditAccountPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import TransactionsPage from './pages/TransactionsPage.jsx';

const protectedPages = ['home', 'transactions', 'account', 'editAccount'];

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedAccountId, setSelectedAccountId] = useState(mockAccounts[0].accountId);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const selectedAccount = useMemo(
    () => mockAccounts.find((account) => account.accountId === selectedAccountId) ?? mockAccounts[0],
    [selectedAccountId]
  );

  const accountTransactions = useMemo(
    () => mockTransactions.filter((transaction) => transaction.accountId === selectedAccount.accountId),
    [selectedAccount]
  );

  function navigate(page) {
    if (protectedPages.includes(page) && !isSignedIn) {
      setCurrentPage('login');
      return;
    }

    setCurrentPage(page);
  }

  function handleLogin() {
    setIsSignedIn(true);
    setCurrentPage('home');
  }

  function handleLogout() {
    setIsSignedIn(false);
    setCurrentPage('login');
  }

  function openAccount(accountId) {
    setSelectedAccountId(accountId);
    setCurrentPage('account');
  }

  if (!isSignedIn && currentPage === 'register') {
    return <RegisterPage onRegister={handleLogin} onLogin={() => navigate('login')} />;
  }

  if (!isSignedIn) {
    return <LoginPage onLogin={handleLogin} onRegister={() => navigate('register')} />;
  }

  return (
    <AppShell
      currentPage={currentPage}
      onNavigate={navigate}
      onLogout={handleLogout}
      profile={profile}
    >
      {currentPage === 'home' && (
        <HomePage
          accounts={mockAccounts}
          transactions={mockTransactions}
          onOpenAccount={openAccount}
          onOpenTransactions={() => navigate('transactions')}
          onCreateAccount={() => navigate('editAccount')}
        />
      )}

      {currentPage === 'transactions' && (
        <TransactionsPage
          accounts={mockAccounts}
          transactions={mockTransactions}
          selectedAccountId={selectedAccountId}
          onSelectAccount={setSelectedAccountId}
        />
      )}

      {currentPage === 'account' && (
        <BankAccountPage
          account={selectedAccount}
          transactions={accountTransactions}
          onEdit={() => navigate('editAccount')}
          onTransactions={() => navigate('transactions')}
        />
      )}

      {currentPage === 'editAccount' && (
        <EditAccountPage account={selectedAccount} onCancel={() => navigate('account')} onSave={() => navigate('account')} />
      )}
    </AppShell>
  );
}
