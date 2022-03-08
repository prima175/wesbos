import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Form from './styles/Form';
import useForm from '../lib/useForm';
// import { CURRENT_USER_QUERY } from './User';
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  //   console.log(error);
  const sucessfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;
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
      <h2> Reset your Password</h2>
      <Error error={error || sucessfulError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === 'null' && (
          <p>Success! you can sign in!</p>
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
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder=" password "
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Reset Password!</button>
      </fieldset>
    </Form>
  );
}
