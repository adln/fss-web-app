import moment from 'moment';
import React from 'react';
import {
	Datagrid,
	FunctionField,
	ReferenceManyField,
	ReferenceField,
	Show,
	
	Tab,
	TabbedShowLayout,
	TextField
} from 'react-admin';
import { TitleShowAgents } from './_partials/Title';

export const AgentShow = (props) => (
	<Show {...props} title={<TitleShowAgents />}>
		<TabbedShowLayout>
			<Tab label="Informations">
				<TextField source="nom" />
				<TextField source="prenom" />
				<TextField source="adresse" />
				<TextField source="telephone1" />
				<TextField source="telephone2" />
				<ReferenceField label="Site" source="site_id" reference="sites">
					<TextField source="nom" />
				</ReferenceField>
				<TextField source="id" />
			</Tab>
			<Tab label="Vacations">
				<ReferenceManyField target="agent_id" reference="vacations" addLabel={false}>
					<Datagrid>
						<ReferenceField source="agent_id" reference="agents">
							<FunctionField render={(record) => record.nom + ' ' + record.prenom} />
						</ReferenceField>
						<FunctionField
							label="Début"
							render={(record) => moment(record.debut).format('HH:mm:ss [le] DD-MM-YYYY')}
						/>
						<FunctionField
							label="Fin"
							render={(record) =>
								record.fin ? moment(record.fin).format('HH:mm:ss [le] DD-MM-YYYY') : 'En Cours'
							}
						/>

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
					</Datagrid>
				</ReferenceManyField>
			</Tab>
		</TabbedShowLayout>
	</Show>
);
