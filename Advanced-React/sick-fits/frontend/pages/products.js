// import Products  from "../components/Products";
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Product from '../components/Product';
import formatMoney from '../lib/formatMoney';

const ALL_PRODUCT_QUERY = gql`
  query ALL_PRODUCT_QUERY {
    allProducts {
      id
      name
      price
      description #
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;
export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCT_QUERY);
  //   console.log(data, error, loading);
  if (loading) return <p>Loading....</p>;
  if (error) return <p> Error:{error.message}</p>;
  return (
    <ProductListStyles>
      {data.allProducts.map((product) => (
        <Product key={Product} product={product} />
      ))}
    </ProductListStyles>
  );
}
