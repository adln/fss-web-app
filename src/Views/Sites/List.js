import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
export const SiteList = (props) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="nom" />
			<TextField source="telephone" />
			<TextField source="adresse" />
		</Datagrid>
	</List>
);
