import React from 'react';
import { Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { TitleEditUsers } from './_partials/Title';
import {VacationInput} from './Create';
export const VacationEdit = (props) => (
	<Edit {...props} title={<TitleEditUsers />}>
		<SimpleForm>
			<SelectInput
				source="role"
				choices={[
					{ id: 'admin', name: 'Administrateur' },
					{ id: 'agent', name: 'Agent' },
					{ id: 'client', name: 'Client' }
				]}
			/>
      <VacationInput source="linked_account" label="Compte lié" />
      
			<TextInput source="username" />
			<TextInput source="id" disabled />
		</SimpleForm>
	</Edit>
);
