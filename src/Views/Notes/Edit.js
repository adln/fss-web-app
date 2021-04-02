import React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, ReferenceInput } from 'react-admin';

export const NotesEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="type" />
			<TextInput source="action" />
			<TextInput source="num_mh" />
			<TextInput source="description" />
			<ReferenceInput source="site_id" reference="sites">
				<SelectInput optionText="nom" />
			</ReferenceInput>
			<ReferenceInput source="agent_id" reference="agents">
				<SelectInput optionText="nom" />
			</ReferenceInput>
			<TextInput source="id" disabled />
		</SimpleForm>
	</Edit>
);
