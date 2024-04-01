
import { IconDashboard } from '@tabler/icons-react';
const icons = { IconDashboard };


const dashboard = {
  id: 'sample',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'sample',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
