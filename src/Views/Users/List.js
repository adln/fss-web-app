import React from 'react';
import {
	Filter,
	List,
	TextInput
} from 'react-admin';
import { TabbedDatagrid } from './_partials/TabbedDatagrid';
import withStyles from '@material-ui/core/styles/withStyles';
const filterStyles = {
	status: { width: 150 },
};
const UsersFilter = withStyles(filterStyles)(({ classes, ...props }) => (
	<Filter {...props}>
			<TextInput label="Recherche" source="q" alwaysOn />
	</Filter>
));

export const UserList = (props) => (
	<List
		{...props}
		filterDefaultValues={{ role: 'admin' }}
		sort={{ field: 'nom', order: 'DESC' }}
		perPage={25}
		filters={<UsersFilter />}
	>
		<TabbedDatagrid />
	</List>
);
