import { integer, text, select, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const CartItem = list({
  ui: {
    listView: {
      initialColumns: ['product', 'quantity', 'user'],
    },
  },

  fields: {
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    product: relationship({ ref: 'Product' }),
    // relationship will link list product to backend Product list
    user: relationship({ ref: 'User.cart' }),
  },
});
