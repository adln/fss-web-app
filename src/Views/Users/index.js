import { UserCreate } from './Create';
import { UserEdit } from './Edit';
import { UserList } from './List';
import { UserShow } from './Show';
import People from '@material-ui/icons/People';

const users = {
	list: UserList,
	edit: UserEdit,
	show: UserShow,
	create: UserCreate,
	icon: People
};

export default users;
