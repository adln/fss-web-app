import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';
export const EvenementList = (props) => (
	<List {...props} >
		<Datagrid rowClick="show">
      <DateField source="createdAt" showTime locales="fr-FR"/>
			<TextField source="type" />
			<TextField source="action" />
			<TextField source="description" />

		</Datagrid>
	</List>
);
