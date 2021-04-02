import moment from 'moment';
import React from 'react';
import { FunctionField, Show, SimpleShowLayout, TextField } from 'react-admin';
import {TitleShowUsers} from './_partials/Title';

export const VacationShow = (props) => (
	<Show {...props} title={<TitleShowUsers />}>
		<SimpleShowLayout>

			<TextField source="role" />
			<TextField source="username" />
			<TextField source="id" />
			<FunctionField
							label="Nombre de minutes"
							render={(record) =>
								record.fin
									? moment.duration(moment(record.fin).diff(moment(record.debut))).hours() +
									  ' Heures et ' +
									  moment.duration(moment(record.fin).diff(moment(record.debut))).minutes() +
									  ' Minutes'
									: 'En Cours'
							}
						/>
		</SimpleShowLayout>
	</Show>
);
