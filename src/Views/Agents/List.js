import React from 'react';
import { List, Datagrid, TextField, FunctionField, Filter, TextInput, ReferenceField } from 'react-admin';
export const AgentList = (props) => (
	<List
		{...props}
		filters={
			<Filter {...props}>
				<TextInput label="Recherche" source="q" alwaysOn />
			</Filter>
		}
	>
		<Datagrid rowClick="show">
			<FunctionField render={(record) => record.nom + ' ' + record.prenom} label="Nom complet" />
			<TextField source="telephone1" />
			<TextField source="adresse" />
			<ReferenceField label="Site" source="site_id" reference="sites">
				<TextField source="nom" />
			</ReferenceField>
		</Datagrid>
	</List>
);
