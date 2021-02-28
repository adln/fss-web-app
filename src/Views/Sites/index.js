
import { SiteCreate } from './Create';
import { SiteEdit } from './Edit';
import { SiteList } from './List';
import { SiteShow } from './Show';
import Place from '@material-ui/icons/Place'


const sites = {
  list: SiteList,
  edit: SiteEdit,
  show: SiteShow,
  create: SiteCreate,
  icon: Place
};

export default sites;
