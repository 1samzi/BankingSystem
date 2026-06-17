export const profile = {
  name: 'Sam',
  email: 'sam@example.com',
};

export const accounts = [
  {
    id: 1,
    accountNumber: '3875252182',
    name: 'Checking',
    accountType: 'EVERYDAY',
    balance: 200,
  },
  {
    id: 2,
    accountNumber: '7749457072',
    name: 'Savings',
    accountType: 'RESERVE',
    balance: 500,
  },
  {
    id: 3,
    accountNumber: '1623661967',
    name: 'Travel Fund',
    accountType: 'GOAL',
    balance: 1250,
  },
];

export const transactions = [
  {
    accountId: 1,
    amount: 100,
    transactionType: 'DEPOSIT',
  },
  {
    accountId: 2,
    amount: 300,
    transactionType: 'WITHDRAWAL',
  },
  {
    accountId: 1,
    amount: 6.75,
    transactionType: 'WITHDRAWAL',
  },
  {
    accountId: 3,
    amount: 250,
    transactionType: 'DEPOSIT',
  },
];
