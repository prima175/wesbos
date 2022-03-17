import { keystoneContext } from '@keystone-next/types';

export default function addToCart(
  root: any,
  { productId }: { productId: string },
  context: keystoneContext
) {
  console.log('hiiii');
}
