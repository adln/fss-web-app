import React from 'react';
import HOST from '../../helpers/HOST';
const authProvider = {
	login: ({ username, password }) => {
		const request = new Request(HOST.URL + '/users/auth', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: new Headers({ 'Content-Type': 'application/json' })
		});
		return fetch(request)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((auth) => {
				localStorage.setItem('auth', JSON.stringify(auth));
			})
			.catch(() => {
				throw new Error('Network error');
			});
	},
	logout: () => {
		localStorage.removeItem('auth');
		localStorage.removeItem('permissions');
		return Promise.resolve();
	},
	checkAuth: () => (localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()),
	getPermissions: () => {
		const role = localStorage.getItem('permissions');
		return role ? Promise.resolve(role) : Promise.reject();
	}
};
export default authProvider;
