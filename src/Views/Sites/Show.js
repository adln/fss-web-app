import React from 'react';
import {
	Show,
	TabbedShowLayout,
	Tab,
	TextField,
	ReferenceManyField,
	Datagrid,
	DateField,
	FunctionField
} from 'react-admin';
import { TitleShowSites } from './_partials/Title';
import { Grid, Typography } from '@material-ui/core';
import { ColorField } from 'react-admin-color-input';
import moment from 'moment';

const ShowView = ({ hasShow, record, ...props }) => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={6} spacing={2} container>
				<Grid item xs={12}>
					<Typography variant="caption">Nom du site</Typography>
					<Typography variant="body1">{record.nom}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="caption">Description</Typography>
					<Typography variant="body1">{record.description}</Typography>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="caption">Adresse</Typography>
					<Typography variant="body1">{record.adresse}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="caption">Téléphone</Typography>
					<Typography variant="body1">{record.telephone}</Typography>
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<img src={`${record.logo}`} alt={record.nom}/>
			</Grid>
		</Grid>
	);
};

export const SiteShow = ({hasShow, ...props}) => (
	<Show hasShow {...props} title={<TitleShowSites />}>
		<TabbedShowLayout>
			<Tab label="Informations">
				<ShowView />
				<ColorField source="color" label="Couleur de l'éspace client" />
			</Tab>
			<Tab label="Agents Assignés" path="agents">
				<ReferenceManyField target="site_id" reference="agents" addLabel={false}>
					<Datagrid>
						<TextField source="nom" />
						<TextField source="prenom" />
						<TextField source="telephone1" />
						<TextField source="telephone2" />
					</Datagrid>
				</ReferenceManyField>
			</Tab>
			<Tab label="Comptes Liés" path="comptes">
				<ReferenceManyField target="linked_account" reference="users" addLabel={false}>
					<Datagrid>
						<DateField source="createdAt" label="Créé à" />
						<TextField source="username" label="Nom d'utilisateur" />
					</Datagrid>
				</ReferenceManyField>
			</Tab>
			<Tab label="Vacations" path="vacations">
				<ReferenceManyField target="site_id" reference="vacations" addLabel={false}>
					<Datagrid>
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
			<Tab label="Notes" path="notes">
				<ReferenceManyField target="site_id" reference="notes" addLabel={false}>
					<Datagrid>
						<DateField source="createdAt" label="Créé à" />
						<TextField source="note" label="Note" />
						<FunctionField render={(record)=> console.log(record)} />
					</Datagrid>
				</ReferenceManyField>
			</Tab>
		</TabbedShowLayout>
	</Show>
);
