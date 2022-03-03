import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;
// console.log(_allProductsMeta);

export default function Pagination({ page }) {
  const { loading, data, error } = useQuery(PAGINATION_QUERY);
  if (loading) return 'loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage); // math.ceil return  next largest integer
  // link er moddhe another variable diiferent tag er moddhe dhukano laghe
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits -Page{pageCount} of___ </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>prev</a>
        {/* aria- disabled means it is accessable but with conditions otherwise not accessable */}
      </Link>

      <p>
        page {page}of {pageCount}
      </p>
      <p>{count} items total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>next</a>
      </Link>
    </PaginationStyles>
  );
}
