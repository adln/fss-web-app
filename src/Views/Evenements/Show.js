import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Chip,
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Paper
} from '@material-ui/core';
import { Show, SimpleShowLayout, Link, useQuery, Loading, Error } from 'react-admin';
import { linkToRecord } from 'react-admin';
import moment from 'moment';
// import { Link } from 'react-router-dom';
const ShowView = ({ record, ...props }) => {
	const agentData = useQuery({
		type: 'getOne',
		resource: 'agents',
		payload: { id: record.agent_id }
	});
	if (agentData.loading) return <Loading />;
	if (agentData.error) return <Error />;
	if (!agentData.data) return null;
	console.log(agentData.data);

	return (
		<Grid container spacing={2}>
			<Grid container xs={9} spacing={2} alignContent="flex-start" item>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Typography variant="caption">Action</Typography>
							<Typography variant="h5">
								{record.action}
								{record.urgent === true ? (
									<Chip
										label="Urgent"
										color="secondary"
										size="medium"
										style={{ backgroundColor: 'red', fontSize: 20 }}
									/>
								) : null}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Typography variant="caption">Description</Typography>
							<Typography variant="body1" style={{ textTransform: 'capitalize' }}>
								{record.description}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="overline" style={{ textTransform: 'capitalize' }}>
						{record.id}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					{!!record.photos &&
						!!record.photos.length &&
						record.photos.map((photo, index) => {
							return <img src={photo} height={300} key={index} alt="Photos de l'événements"/>;
						})}
				</Grid>
			</Grid>
			{/* Side bar */}
			<Grid container xs={3} spacing={2} alignContent="flex-start" item>
				<Grid item xs={12}>
					<TableContainer component={Paper}>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell align="center" colSpan={2}>
										<Typography variant="caption">Créé à {moment(record.createdAt).fromNow() }</Typography>
										<Typography variant="h5" style={{ textTransform: 'capitalize' }}>
											{moment(record.createdAt).format('HH:mm:ss [le] DD/MM/YYYY') }
										</Typography>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell align="center" colSpan={2}>
										<Typography variant="caption">Type d'événement</Typography>
										<Typography variant="h4" style={{ textTransform: 'capitalize' }}>
											{record.type}
										</Typography>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell align="left">
										<Typography variant="caption">Agent</Typography>
									</TableCell>
									<TableCell align="right">
										<Typography variant="body1" style={{ textTransform: 'capitalize' }}>
											<Link to={linkToRecord('/agents', record.agent_id.id, 'show')}>
												{agentData.data.nom + ' ' + agentData.data.prenom}
											</Link>
										</Typography>
									</TableCell>
								</TableRow>
								{['Surveillance', 'Maintenance', 'Tappage Nocturne'].includes(record.type) && (
									<TableRow>
										<TableCell align="left">
											<Typography variant="caption">N° Mobil-Home</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography variant="h4" style={{ textTransform: 'capitalize' }}>
												{record.num_mh}
											</Typography>
										</TableCell>
									</TableRow>
								)}
								{record.type === 'fete' && (
									<>
										<TableRow>
											<TableCell align="left">
												<Typography variant="caption">Village</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography variant="h4" style={{ textTransform: 'capitalize' }}>
													{record.village}
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="left">
												<Typography variant="caption">Heure</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography variant="h4" style={{ textTransform: 'capitalize' }}>
													{record.heure}
												</Typography>
											</TableCell>
										</TableRow>
									</>
								)}
								{record.type === 'buggy' && (
									<>
										<TableRow>
											<TableCell align="left">
												<Typography variant="caption">N° Buggy</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography variant="h4" style={{ textTransform: 'capitalize' }}>
													{record.num_buggy}
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="left">
												<Typography variant="caption">Opérations</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography variant="h4" style={{ textTransform: 'capitalize' }}>
													{record.operations}
												</Typography>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell align="left">
												<Typography variant="caption">Observations</Typography>
											</TableCell>
											<TableCell align="right">
												<Typography variant="h4" style={{ textTransform: 'capitalize' }}>
													{record.observations}
												</Typography>
											</TableCell>
										</TableRow>
									</>
								)}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</Grid>
	);
};

export const EvenementShow = (props) => (
	<Show {...props}>
		<SimpleShowLayout>
			<ShowView />
		</SimpleShowLayout>
	</Show>
);
