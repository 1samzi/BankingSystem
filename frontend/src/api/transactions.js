import { apiRequest } from './client.js';

export function createTransaction(data) {
    return apiRequest('/transactions', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

export function getTransactionsByAccountId(accountId) {
    return apiRequest(`/transactions/account/${accountId}`);
}