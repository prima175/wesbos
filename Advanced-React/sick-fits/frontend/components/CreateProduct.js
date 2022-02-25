import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;
// const CREATE_PRODUCT_MUTATION = gql`
//   mutation CREATE_PRODUCT_MUTATION {
//     createProduct(
//       data: {
//         name: "sample"
//         price: 100
//         description: "best"
//         status: "available"
//       }
//     ) {
//       id
//       price
//       description
//     }
//   }
// `;
// console.log(CREATE_PRODUCT_MUTATION);
export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'nice shoes ',
    price: 2345,
    description: 'these are the best shoe',
  });
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
  console.log(createProduct);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(inputs);
        const res = await createProduct();
        console.log(res);
        clearForm();
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          image
          <input
            required
            type="file"
            id="image"
            name="image"
            // value={inputs.image}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        {/* <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button> */}
        <button type="submit"> +Add product</button>
      </fieldset>
    </Form>
  );
}
// fetch('http://localhost:7777/sell', {
//   mode: 'no-cors',
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(ob),
// });
