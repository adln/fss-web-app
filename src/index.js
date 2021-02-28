import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
// Load Local Variables
import HOST from './helpers/HOST';
// Language
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import evenements from './Views/Evenements';
import sites from './Views/Sites';
import agents from './Views/Agents';
import users from './Views/Users';

// Start code
const i18nProvider = polyglotI18nProvider(() => frenchMessages, 'fr');

ReactDOM.render(
	<Admin i18nProvider={i18nProvider} dataProvider={jsonServerProvider(HOST.URL)}>
		<Resource name="evenements" {...evenements}/>
		<Resource name="sites" {...sites}/>
		<Resource name="agents" {...agents}/>
		<Resource name="users" {...users}/>
	</Admin>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
