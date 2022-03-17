import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import 'dotenv/config';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { Product } from './schemas/Product';

import { User } from './schemas/User';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { CartItem } from './schemas/Cartitem';
import { extendGraphqlSchema } from './mutations/index';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};
const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
  passwordResetLink: {
    async sendToken(args) {
      // console.log(args);
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});
export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FROTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL, // add data here
      async onConnect(keystone) {
        console.log('conncted');
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      User,
      Product,
      ProductImage,
      CartItem,
    }),
    extendGraphqlSchema,
    ui: {
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
