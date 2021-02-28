import React from 'react';
import { List, Datagrid, TextField, FunctionField, Filter, TextInput } from 'react-admin';
export const AgentList = (props) => (
	<List
		{...props}
		filters={
			<Filter {...props}>
				<TextInput label="Recherche" source="q" alwaysOn />
			</Filter>
		}
	>
		<Datagrid rowClick="edit">
			<FunctionField render={(record) => record.nom + ' ' + record.prenom} label="Nom complet" />
			<TextField source="telephone1" />
			<TextField source="adresse" />
		</Datagrid>
	</List>
);
