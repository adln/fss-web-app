import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';
import { TitleShowAgents } from './_partials/Title';

export const AgentShow = props => (
	<Show {...props} title={<TitleShowAgents />}>
			<SimpleShowLayout>
					<TextField source="nom" />
					<TextField source="prenom" />
					<TextField source="adresse" />
					<TextField source="telephone1" />
					<TextField source="id" />
			</SimpleShowLayout>
	</Show>
);
