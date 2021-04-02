import React from 'react';
import { AutocompleteInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const SiteCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="nom" />
			<TextInput source="prenom" />
			<TextInput source="adresse" />
			<TextInput source="telephone1" />
			<ReferenceInput source="site_id" reference="sites">
				{/* <SelectInput optionText="nom" /> */}
				<AutocompleteInput optionText="nom" />
			</ReferenceInput>
			<TextInput source="id" disabled />
		</SimpleForm>
	</Create>
);
