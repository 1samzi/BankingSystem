import { useMemo, useState } from 'react';
import { createAccount, getAccountsByUserId } from './api/accounts.js';
import { createUser } from './api/users.js';
import AppShell from './components/AppShell.jsx';
import { accounts as mockAccounts, profile, transactions as mockTransactions } from './data/mockData.js';
import BankAccountPage from './pages/BankAccountPage.jsx';
import EditAccountPage from './pages/EditAccountPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import TransactionsPage from './pages/TransactionsPage.jsx';
import {getTransactionsByAccountId, createTransaction} from "./api/tranactions.js";

const protectedPages = ['home', 'transactions', 'account', 'editAccount'];

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedAccountId, setSelectedAccountId] = useState(mockAccounts[0].id);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [accounts, setAccounts] = useState(mockAccounts);
  const [authError, setAuthError] = useState('');
  const [accountError, setAccountError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionError, setTransactionError] = useState('');

  const selectedAccount = useMemo(
      () => accounts.find((account) => account.id === selectedAccountId) ?? accounts[0] ?? null,
      [accounts, selectedAccountId]
  );

  const accountTransactions = useMemo(
      () => selectedAccount
          ? transactions.filter((transaction) => transaction.accountId === selectedAccount.id)
          : [],
      [selectedAccount]
  );

  const activeProfile = currentUser
      ? {name: currentUser.email, email: currentUser.email}
      : profile;

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
    setCurrentUser(null);
    setAccounts(mockAccounts);
    setSelectedAccountId(mockAccounts[0].id);
    setAuthError('');
    setAccountError('');
    setCurrentPage('login');
  }

  async function handleRegister(userData) {
    try {
      setIsRegistering(true);
      setAuthError('');

      const createdUser = await createUser(userData);
      const userId = createdUser.id ?? createdUser.userId;
      const userAccounts = await getAccountsByUserId(userId);

      setCurrentUser(createdUser);
      setAccounts(userAccounts);
      setSelectedAccountId(userAccounts[0]?.id ?? null);
      setIsSignedIn(true);
      setCurrentPage('home');
    } catch (error) {
      setAuthError(error.message || 'Registration failed. Make sure the backend is running and the email is not already used.');
    } finally {
      setIsRegistering(false);
    }
  }

  function openNewAccountForm() {
    setSelectedAccountId(null);
    setAccountError('');
    setCurrentPage('editAccount');
  }

  async function handleSaveAccount(accountData) {
    const userId = currentUser?.id ?? currentUser?.userId;

    if (!userId) {
      setAccountError('Create a user through Register before adding an account.');
      return;
    }

    try {
      setAccountError('');
      const createdAccount = await createAccount({
        ...accountData,
        userId,
      });
      const updatedAccounts = await getAccountsByUserId(userId);

      setAccounts(updatedAccounts);
      setSelectedAccountId(createdAccount.id);
      setCurrentPage('account');
    } catch {
      setAccountError('Could not create account.');
    }
  }

  async function handleCreateTransaction(transactionType, amount) {
    if (!selectedAccount) {
      return;
    }

    await createTransaction({
      accountId: selectedAccount.id,
      transactionType,
      amount: Number(amount),
    });

    const userId = currentUser.id ?? currentUser.userId;
    const updatedAccounts = await getAccountsByUserId(userId);
    const updatedTransactions = await getTransactionsByAccountId(selectedAccount.id);

    setAccounts(updatedAccounts);
    setTransactions(updatedTransactions);
  }

  async function openAccount(accountId) {
    setSelectedAccountId(accountId);

    const accountTransactions = await getTransactionsByAccountId(accountId);
    setTransactions(accountTransactions);

    setCurrentPage('account');
  }

  if (!isSignedIn && currentPage === 'register') {
    return (
        <RegisterPage
            error={authError}
            isSubmitting={isRegistering}
            onRegister={handleRegister}
            onLogin={() => navigate('login')}
        />
    );
  }

  if (!isSignedIn) {
    return <LoginPage onLogin={handleLogin} onRegister={() => navigate('register')}/>;
  }

  return (
      <AppShell
          currentPage={currentPage}
          onNavigate={navigate}
          onLogout={handleLogout}
          profile={activeProfile}
      >
        {currentPage === 'home' && (
            <HomePage
                accounts={accounts}
                transactions={transactions}
                onOpenAccount={openAccount}
                onOpenTransactions={() => navigate('transactions')}
                onCreateAccount={openNewAccountForm}
            />
        )}

        {currentPage === 'transactions' && (
            <TransactionsPage
                accounts={accounts}
                transactions={transactions}
                selectedAccountId={selectedAccountId ?? 'all'}
                onSelectAccount={setSelectedAccountId}
            />
        )}

        {currentPage === 'account' && selectedAccount && (
            <BankAccountPage
                account={selectedAccount}
                transactions={accountTransactions}
                onDeposit={(amount) => handleCreateTransaction('DEPOSIT', amount)}
                onWithdraw={(amount) => handleCreateTransaction('WITHDRAWAL', amount)}
                onEdit={() => navigate('editAccount')}
                onTransactions={() => navigate('transactions')}
            />
        )}

        {currentPage === 'editAccount' && (
            <EditAccountPage
                account={selectedAccount}
                error={accountError}
                onCancel={() => selectedAccount ? navigate('account') : navigate('home')}
                onSave={handleSaveAccount}
            />
        )}
      </AppShell>
  );
}
