import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const EvenementShow = (props) => (
	<Show {...props}>
		<SimpleShowLayout>
			
			<TextField source="id" />
			<TextField source="type" />
			<TextField source="action" />
			<TextField source="num_mh" />
			<TextField source="description" />
			
		</SimpleShowLayout>
	</Show>
);
