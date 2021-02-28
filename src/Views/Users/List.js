import React from 'react';
import { List, Datagrid, TextField, ArrayField, ChipField, SingleFieldList } from 'react-admin';
import ListField from '../../helpers/ListField';

export const UserList = (props) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="username" />
			<ListField source="roles"/>
		</Datagrid>
	</List>
);
