import { IconChartBar } from '@tabler/icons-react';
const icons = {
    IconChartBar
  };
const reports = {
    id: 'reportID',
    type: 'group',
    children: [
        {
            id: 'groupReports',
            title: 'Reports',
            type: 'collapse',
            icon: icons.IconChartBar,
            children: [
                {
                    id: 'SalesByItemID',
                    title: 'Sales By Item',
                    type: 'item'
                },
                {
                    id: 'SalesCategryoID',
                    title: 'Sales By Category',
                    type: 'item'
                },
                {
                    id: 'SalesDiscountsID',
                    title: 'Discounts',
                    type: 'item'
                }
            ]
        },      
    ]
}

export default reports