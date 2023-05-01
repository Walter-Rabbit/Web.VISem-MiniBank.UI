import * as supertokens from 'supertokens-web-js';
import * as supertokensSession from 'supertokens-web-js';
import * as supertokensEmailPassword from 'supertokens-web-js';
import * as Dashboard from 'supertokens-node';

export default function supertokens_init() {
  supertokens.init({
    supertokens: {
      connectionURI:
        'https://dev-3fee4971e81d11edb88efb40042c40db-eu-west-1.aws.supertokens.io:3572',
      apiKey: 'ZPdG3XUsFhfvWGoEXft-lE8Q1bXvd0',
    },
    appInfo: {
      apiDomain: process.env.DOMAIN,
      apiBasePath: '/auth',
      appName: '...',
    },
    recipeList: [
      supertokensSession.init(),
      supertokensEmailPassword.init(),
      Dashboard.init(),
    ],
  });
}
