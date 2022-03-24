/* eslint-disable */
import { keystoneContext } from '@keystone-next/types';

import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: keystoneContext
): Promise<CartItemCreateInput> {
  console.log('already in cart');
  // query the current user see if they are signed in
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('you  must be logged in');
  }
  // query the current user's cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity',
  });
  // console.log(allCartItems);

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(existingCartItem);

    console.log(
      `there are already ${existingCartItem.quantity}, incremented by 1`
    );
    // if it is iccrement by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }
  // create a new cart item
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}
export default addToCart;
