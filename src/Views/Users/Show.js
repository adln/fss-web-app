import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';
import ListField from '../../helpers/ListField';
import {TitleShowUsers} from './_partials/Title';

export const UserShow = (props) => (
	<Show {...props} title={<TitleShowUsers />}>
		<SimpleShowLayout>
			<TextField source="username" />
			<TextField source="password" />
			<ListField source="roles" />
			<TextField source="id" />
		</SimpleShowLayout>
	</Show>
);
