import { VacationCreate } from './Create';
import { VacationEdit } from './Edit';
import { VacationList } from './List';
import { VacationShow } from './Show';
import CalendarToday from '@material-ui/icons/CalendarToday';

const vacations = {
	list: VacationList,
	edit: VacationEdit,
	show: VacationShow,
	create: VacationCreate,
	icon: CalendarToday
};

export default vacations;
