import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';

import { useUser } from './User';
import Supreme from './styles/Supreme';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveCart from './RemoveCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  // console.log(product);
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>{formatMoney(product.price * cartItem.quantity)}</p>
        <em>
          {cartItem.quantity} &times; {formatMoney(product.price)} each
        </em>
      </div>
      <RemoveCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  //   console.log(data);
  if (!me) return null;
  // console.log(me);
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'cart</Supreme>
      </header>
      <CloseButton type="button" onClick={closeCart}>
        &times;
      </CloseButton>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
      </footer>
    </CartStyles>
  );
}