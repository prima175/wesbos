import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

export default function OrderPage() {
  const { query } = useRouter();
  // console.log(router);
  console.log(typeof query.page);
  const page = parseInt(query.page); // string console e blue colour e represent kore
  return (
    <div>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
