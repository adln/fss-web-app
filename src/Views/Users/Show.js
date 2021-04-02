import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';
import {TitleShowUsers} from './_partials/Title';

export const UserShow = (props) => (
	<Show {...props} title={<TitleShowUsers />}>
		<SimpleShowLayout>

			<TextField source="role" />
			<TextField source="username" />
			<TextField source="id" />
		</SimpleShowLayout>
	</Show>
);
