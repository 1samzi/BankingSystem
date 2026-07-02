import { apiRequest } from './client.js';

export function createUser(data) {
  return apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function getUserByEmail(email) {
  return apiRequest(`/users/email/${encodeURIComponent(email)}`);
}