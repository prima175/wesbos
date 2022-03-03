import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells  apollo that we will take care of everything

    read(existing = [], { args, cache }) {
      console.log({ existing, args, cache });
      const { skip, first } = args;

      // read the number of items from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY }); // always query export from the component file
      console.log(data);
      const count = data?._allProductsMeta?.count; // this question marks check this the move forward
      const page = skip / first + 1;
      const pages = Math.ceil(count / first); // last page
      // check we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        return false;
      }
      // if there are items retuen from cache , dont need to go to the network
      if (items.length) {
        console.log(
          `there are ${items.length} in the cache. gonna send to the apollo`
        );
        return items;
      }
      return false;

      // fallback to network
      // first thing  is ask to read the funnction for those  items

      // do 2 things
      // 1...return the items becoz they are already in the cache
      // return false from here (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      console.log(`merging  items  form the network ${incoming.length} `);
      // this runs when the appollo client come back from network with our product.....incoming means new product
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      console.log(merged);
      return merged;
    },
  };
}
