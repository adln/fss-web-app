import React, { useEffect, useState } from 'react';
import {
	Container,
	Grid,
	Card,
	CardContent,
	Typography,
	Table,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	Chip
} from '@material-ui/core';
import HOST from '../../helpers/HOST';
import axios from 'axios';
import moment from 'moment';
import {Button} from 'react-admin';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import { linkToRecord } from 'ra-core';
import { Link } from 'ra-ui-materialui';

export default function Dashboard() {
	const [events_today, setEventsToday] = useState(0);
	const [sites_couverts, setSitesCouverts] = useState(0);
	const [agents, setAgents] = useState(0);
	const [vacations_en_cours, setVacationEnCours] = useState(0);
	const [last_ten_vacation, setLastTenVacation] = useState([]);
	const [last_ten_events, setLastTenEvents] = useState([]);
	const getEventsToday = () => {
		axios
			.get(HOST.URL + '/statistics/evenements_today')
			.then(({ status, data }) => {
				setEventsToday(data);
			})
			.catch((err) => setEventsToday('ERR'));
	};
	const getSitesCouverts = () => {
		axios
			.get(HOST.URL + '/statistics/sites_couverts')
			.then(({ status, data }) => {
				setSitesCouverts(data);
			})
			.catch((err) => setSitesCouverts('ERR'));
	};
	const getAgents = () => {
		axios
			.get(HOST.URL + '/statistics/agents_count')
			.then(({ status, data }) => {
				setAgents(data);
			})
			.catch((err) => setAgents('ERR'));
	};
	const loadAgentsNames = (vacations) => {
		let ids = [];
		let uri = '?';
		vacations.map((vacation) => {
			if (ids.indexOf(vacation.agent_id) === -1) {
				ids.push(vacation.agent_id);
			}
		});
		ids.map((id) => (uri += 'id=' + id + '&'));
		axios.get(HOST.URL + '/agents' + uri).then(({ status, data }) => {
			let new_vacations = vacations.map((vacation) => ({
				...vacation,
				agent: data.find((agent) => agent._id === vacation.agent_id)
			}));
			setLastTenVacation(new_vacations);
		});
	};
	const getVacationEnCours = () => {
		axios
			.get(HOST.URL + '/statistics/vacations_en_cours')
			.then(({ status, data }) => {
				setVacationEnCours(data);
			})
			.catch((err) => setVacationEnCours('ERR'));
	};
	const loadSitesNames = (evenements) =>{
		let ids = [];
		let uri = '?';
		evenements.map((evenement) => {
			if (ids.indexOf(evenement.site_id) === -1) {
				ids.push(evenement.site_id);
			}
		});
		ids.map((id) => (uri += 'id=' + id + '&'));
		axios.get(HOST.URL + '/sites' + uri).then(({ status, data }) => {
			let new_evenements = evenements.map((evenement) => ({
				...evenement,
				site: data.find((site) => site._id === evenement.site_id)
			}));
			setLastTenEvents(new_evenements);
		});
	}
	const getTenLastVacation = () => {
		axios.get(HOST.URL + '/vacations?_sort=debut&_order=DESC&_start=0&_end=9').then(({ status, data }) => {
			// setLastTenVacation(data);
			loadAgentsNames(data);
		});
	};
	const getTenLastEvents = () => {
		axios.get(HOST.URL + '/evenements?_sort=createdAt&_order=DESC&_start=0&_end=9').then(({ status, data }) => {
			// setLastTenVacation(data);
			loadSitesNames(data);
		});
	};

	useEffect(() => {
		getEventsToday();
		getSitesCouverts();
		getAgents();
		getVacationEnCours();
		getTenLastVacation();
		getTenLastEvents();
	}, []);

	return (
		<Container style={{ paddingTop: 25 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<Card>
								<CardContent>
									<Typography variant="subtitle1">Evénements Journée</Typography>
									<Typography variant="h2">{events_today}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={3}>
							<Card>
								<CardContent>
									<Typography variant="subtitle1">Sites couverts</Typography>
									<Typography variant="h2">{sites_couverts}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={3}>
							<Card>
								<CardContent>
									<Typography variant="subtitle1">Agents</Typography>
									<Typography variant="h2">{agents}</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={3}>
							<Card>
								<CardContent>
									<Typography variant="subtitle1">Vacations en cours</Typography>
									<Typography variant="h2">{vacations_en_cours}</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Card>
						<CardContent>
							<Typography variant="subtitle1">10 dérniéres vacations</Typography>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Agent</TableCell>
										<TableCell>Début</TableCell>
										<TableCell>Fin</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{last_ten_vacation &&
										last_ten_vacation.map((vacation) => (
											<TableRow key={vacation.id}>
												<TableCell>
													{vacation.agent && <Link to={linkToRecord('/agents', vacation.agent.id, 'show')}>
													{vacation.agent && vacation.agent.nom + ' ' + vacation.agent.prenom}
													</Link>}
													
												</TableCell>
												<TableCell>
													{vacation.debut &&
														moment(vacation.debut).format('DD-MM-YYYY [à] HH:mm:ss')}{' '}
													<a
														target="_blank"
														rel="noreferrer"
														href={`https://www.google.com/maps/search/?api=1&query=${vacation.geolocation_start.coords.latitude},${vacation.geolocation_start.coords.longitude}`}
													>
														<LocationOnOutlined />
													</a>
												</TableCell>
												<TableCell>
													{vacation.fin &&
														moment(vacation.fin).format('DD-MM-YYYY [à] HH:mm:ss')}
													{vacation.fin ? (
														<a
															target="_blank"
															rel="noreferrer"
															href={`https://www.google.com/maps/search/?api=1&query=${vacation.geolocation_start.coords.latitude},${vacation.geolocation_start.coords.longitude}`}
														>
															<LocationOnOutlined />
														</a>
													) : (
														<Chip label="En Cours" />
													)}
												</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
				<Card>
						<CardContent>
							<Typography variant="subtitle1">10 dérniérs événements</Typography>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Site</TableCell>
										<TableCell>Type</TableCell>
										<TableCell>Temps</TableCell>
										
									</TableRow>
								</TableHead>
								<TableBody>
									{last_ten_events &&
										last_ten_events.map((event) => (
											<TableRow key={event.id} style={{backgroundColor: event.urgent ? '#fcdbdb' : 'default'}}>
												
												<TableCell>
													{event.site.nom}
												</TableCell>
												
												<TableCell>
													{event.type.toUpperCase()}
												</TableCell>
												<TableCell>
													{moment(event.createdAt).fromNow()}
												</TableCell>
												<TableCell>
												<Button to={linkToRecord('/evenements', event.id, 'show')}>Afficher</Button>
												</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
