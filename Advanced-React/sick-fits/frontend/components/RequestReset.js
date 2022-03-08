import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Form from './styles/Form';
import useForm from '../lib/useForm';
// import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [reset, { data, error, loading }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  //   console.log(error);
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await reset().catch(console.error());
    console.log(res);
    resetForm();
    console.log(inputs);
  }
  //   const error =
  //     data?.authenticateUserWithPassword.__typename ===
  //     'UserAuthenticationWithPasswordFailure'
  //       ? data?.authenticateUserWithPassword
  //       : undefined;

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      {/* method use for security purpose not save password */}
      <h2> Reset a Password</h2>
      <Error error={error} />
      <fieldset>
        {data?.sendUserPasswordResetLink === 'null' && (
          <p>Success! check your email !</p>
        )}

        <label htmlFor="email">
          Email Id
          <input
            type="email"
            name="email"
            placeholder="your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Reset Password!</button>
      </fieldset>
    </Form>
  );
}
