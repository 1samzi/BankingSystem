import { apiRequest } from './client.js';

export function getAccountsByUserId(userId) {
  return apiRequest(`/accounts/user/${userId}`);
}

export function createAccount(data){
  return apiRequest('/accounts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}