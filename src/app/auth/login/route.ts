



import {  generateCodeVerifier } from '@badgateway/oauth2-client';;
import {getSession,getClient,AuthConfig}  from '@/lib/lib'





/**
 * This generates a security code that must be passed to the various steps.
 * This is used for 'PKCE' which is an advanced security feature.
 *
 * It doesn't break servers that don't support it, but it makes servers that
 * so support it more secure.
 *
 * It's optional to pass this, but recommended.
 */
export async function GET() {
  const client = getClient()
  const codeVerifier = await generateCodeVerifier();
  const state=await generateCodeVerifier();
  // const redirect_uri = `${process.env.NEXT_PUBLIC_APP_URL}/auth/openiddict`
  const session = await getSession()
  session.code_verifier = codeVerifier
  session.state=state
  // In a browser this might work as follows:
  
  const redirectTo = await client.authorizationCode.getAuthorizeUri({

    // URL in the app that the user should get redirected to after authenticating
    redirectUri: AuthConfig.redirect_uri,

    // Optional string that can be sent along to the auth server. This value will
    // be sent along with the redirect back to the app verbatim.
    // state: state,

    codeVerifier,

    scope: AuthConfig.scope,

  });


  await session.save()
  console.log(redirectTo)
  return Response.redirect(redirectTo)
}











