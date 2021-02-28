
import { EvenementCreate } from './Create';
import { EvenementEdit } from './Edit';
import { EvenementList } from './List';
import { EvenementShow } from './Show';
import Event from '@material-ui/icons/Event'

const evenements = {
  list: EvenementList,
  edit: EvenementEdit,
  show: EvenementShow,
  create: EvenementCreate,
  icon: Event
};

export default evenements;
