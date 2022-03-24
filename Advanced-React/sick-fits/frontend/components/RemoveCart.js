import gql from 'graphql-tag';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
// import { CURRENT_USER_QUERY } from './User';

const Bigbutton = styled.div`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;
const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}
// evict function ....it will fetch  ta specific id and delete it
export default function RemoveCart({ id }) {
  const [removeCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return (
    <Bigbutton
      onClick={removeCart}
      disabled={loading}
      type="button"
      title="remove item from cart"
    >
      &times;
    </Bigbutton>
  );
}
