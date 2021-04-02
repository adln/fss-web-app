import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, AutocompleteInput } from 'react-admin';
import { TitleEditAgents } from './_partials/Title';

export const AgentEdit = (props) => (
	<Edit {...props} title={<TitleEditAgents />}>
		<SimpleForm>
			<TextInput source="nom" />
			<TextInput source="prenom" />
			<TextInput source="adresse" />
			<TextInput source="telephone1" />
			<TextInput source="telephone2" />

			<ReferenceInput source="site_id" reference="sites">
				{/* <SelectInput optionText="nom" /> */}
				<AutocompleteInput optionText="nom" />
			</ReferenceInput>
			<TextInput source="id" disabled />
		</SimpleForm>
	</Edit>
);
