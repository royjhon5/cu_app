
import { IconKey } from '@tabler/icons-react';
import { IconShoppingBagPlus } from '@tabler/icons-react';
import { IconRosetteDiscount } from '@tabler/icons-react';
const icons = {
  IconKey,
  IconShoppingBagPlus,
  IconRosetteDiscount
};

const pages = {
  id: 'product',
  title: 'Item Master',
  type: 'group',
  children: [
    {
      id: 'product_list',
      title: 'Product List',
      type: 'collapse',
      icon: icons.IconShoppingBagPlus,
      children: [
        {
          id: 'products',
          title: 'Item List',
          type: 'item',
          url: '/views/products/list',
          breadcrumbs: false
        },
        {
          id: 'category',
          title: 'Category',
          type: 'item',
          url: '/views/products/category',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'discount_id',
      title: 'Discount',
      type: 'item',
      icon: icons.IconRosetteDiscount,
      breadcrumbs: false
    }
  ]
};

export default pages;
