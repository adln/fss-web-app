import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { Admin, fetchUtils, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// Load Local Variables
import HOST from './helpers/HOST';
// Language
import polyglotI18nProvider from 'ra-i18n-polyglot';
import customFrenchMessages from './i18n/fr';
import evenements from './Views/Evenements';
import sites from './Views/Sites';
import agents from './Views/Agents';
import users from './Views/Users';
import notes from './Views/Notes';
import vacations from './Views/Vacations';
import Layout from './layout/Layout';
import { SnackbarProvider } from 'notistack';
import Socket from './helpers/Socket';
import Dashboard from './Views/Dashboard';
import authProvider from './Views/Auth';
const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const token = localStorage.getItem('auth');
	options.headers.set('Authorization', `Bearer ${token}`);
	return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(HOST.URL, httpClient);

const convertFileToBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = reject;

		reader.readAsDataURL(file.rawFile);
	});

const myDataProvider = {
	...dataProvider,
	update: (resource, params) => {
		if (!params.data.logo) {
			console.log('No logo', params.data.logo);
			return dataProvider.create(resource, params);
		}
		console.log('HERE UPDATE');

		return Promise.all([convertFileToBase64(params.data.logo)])
			.then((base64) => base64[0])
			.then((transformedLogo) => {
				return dataProvider.create(resource, {
					...params,
					data: {
						...params.data,
						logo: transformedLogo
					}
				});
			});
	},
	create: (resource, params) => {
		if (!params.data.logo) {
			console.log('No logo', params.data.logo);
			return dataProvider.create(resource, params);
		}

		return Promise.all([convertFileToBase64(params.data.logo)])
			.then((base64) => base64[0])
			.then((transformedLogo) => {
				return dataProvider.create(resource, {
					...params,
					data: {
						...params.data,
						logo: transformedLogo
					}
				});
			});
	}
};

// Start code
const i18nProvider = polyglotI18nProvider(() => customFrenchMessages, 'fr');

ReactDOM.render(
	<>
		<Admin
			i18nProvider={i18nProvider}
			authProvider={authProvider}
			layout={Layout}
			dataProvider={myDataProvider}
			dashboard={Dashboard}
		>
			<Resource name="evenements" {...evenements} />
			<Resource name="sites" {...sites} />
			<Resource name="agents" {...agents} />
			<Resource name="vacations" {...vacations} />
			<Resource name="users" {...users} />
			<Resource name="notes" {...notes} />
		</Admin>
		<SnackbarProvider>
			<Socket />
		</SnackbarProvider>
	</>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
