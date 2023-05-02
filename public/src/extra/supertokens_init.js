export default function supertokens_init(domain) {
  supertokens.init({
    supertokens: {
      connectionURI:
        'https://dev-3fee4971e81d11edb88efb40042c40db-eu-west-1.aws.supertokens.io:3572',
      apiKey: 'ZPdG3XUsFhfvWGoEXft-lE8Q1bXvd0',
    },
    appInfo: {
      apiDomain: domain,
      apiBasePath: '/auth',
      appName: '...',
    },
    recipeList: [supertokensSession.init(), supertokensEmailPassword.init()],
  });
}
