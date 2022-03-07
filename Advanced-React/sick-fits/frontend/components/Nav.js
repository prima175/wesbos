import Link from 'next/link';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
// import SignInPage from '../pages/signin';

export default function Nav() {
  const user = useUser();
  console.log(user); // user means log in into account
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="account">Account</Link>
          <SignOut />
        </>
      )}
      {/* at first ! means not this.....at last ! means required */}
      {!user && (
        <>
          <Link href="/signin">signIn</Link>
        </>
      )}
    </NavStyles>
  );
}
