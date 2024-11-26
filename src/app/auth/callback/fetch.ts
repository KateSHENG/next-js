import {getSession, getClient,AuthConfig}  from '@/lib/lib'
import { OAuth2Client, OAuth2Fetch } from '@badgateway/oauth2-client';

const client = getClient()
const session = await getSession()

export const fetchWrapper = new OAuth2Fetch({
  client: client,

  /**
   * You are responsible for implementing this function.
   * it's purpose is to supply the 'initial' oauth2 token.
   */
  getNewToken: async () => {


    // Another example
    return client.authorizationCode.getToken({
      code: session.code_verifier??'',
      redirectUri: AuthConfig.redirect_uri,
      state: session.state,
    });

    // You can return null to fail the process. You may want to do this
    // when a user needs to be redirected back to the authorization_code
    // endpoints.
    return null;

  },

  /**
   * Optional. This will be called for any fatal authentication errors.
   */
  onError: (err) => {
    // err is of type Error
    console.log(err)
  }

});