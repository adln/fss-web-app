import { SiteCreate } from './Create';
import { AgentEdit } from './Edit';
import { AgentList } from './List';
import { AgentShow } from './Show';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

const agents = {
  list: AgentList,
  edit: AgentEdit,
  show: AgentShow,
  create: SiteCreate,
  icon: PermContactCalendarIcon
};

export default agents;
