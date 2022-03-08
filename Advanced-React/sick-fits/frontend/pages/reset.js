import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>sorry you must supply a token</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <p>reset</p>
      <Reset token={query.token} />
    </div>
  );
}
