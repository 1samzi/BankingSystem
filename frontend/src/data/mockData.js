export const profile = {
  name: 'Sam',
  email: 'sam@example.com',
};

export const accounts = [
  {
    accountId: 1,
    name: 'Checking',
    type: 'Everyday',
    balance: 200,
    accountNumber: '**** 4021',
  },
  {
    accountId: 2,
    name: 'Savings',
    type: 'Reserve',
    balance: 500,
    accountNumber: '**** 8840',
  },
  {
    accountId: 3,
    name: 'Travel Fund',
    type: 'Goal',
    balance: 1250,
    accountNumber: '**** 1197',
  },
];

export const transactions = [
  {
    transactionId: 1,
    accountId: 1,
    accountName: 'Checking',
    description: 'Paycheck',
    amount: 100,
    type: 'DEPOSIT',
    date: '2026-06-01',
  },
  {
    transactionId: 2,
    accountId: 2,
    accountName: 'Savings',
    description: 'Emergency transfer',
    amount: -300,
    type: 'WITHDRAWAL',
    date: '2026-05-21',
  },
  {
    transactionId: 3,
    accountId: 1,
    accountName: 'Checking',
    description: 'Coffee',
    amount: -6.75,
    type: 'WITHDRAWAL',
    date: '2026-05-18',
  },
  {
    transactionId: 4,
    accountId: 3,
    accountName: 'Travel Fund',
    description: 'Monthly savings',
    amount: 250,
    type: 'DEPOSIT',
    date: '2026-05-15',
  },
];
