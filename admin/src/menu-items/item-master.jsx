import { IconListCheck, IconDiscount  } from '@tabler/icons-react';

const icons = {
    IconListCheck,
    IconDiscount 
};

const item_master = {
    id: 'itemmaster',
    title: 'Item Master',
    type: 'group',
    children: [
        {
            id: 'products',
            title: 'Products',
            type: 'collapse',
            icon: icons.IconListCheck,
            children: [
                {
                    id: 'list',
                    title: 'Product List',
                    type: 'item',
                    target: true
                },
                {
                    id: 'category',
                    title: 'Categories',
                    type: 'item',
                    target: true
                }
            ],
        },
        {
            id: 'discount',
            title: 'Discount',
            type: 'item',
            icon: icons.IconDiscount
        }
    ]
}

export default item_master