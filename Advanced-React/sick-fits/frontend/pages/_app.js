import Nprogress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.start());

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}
