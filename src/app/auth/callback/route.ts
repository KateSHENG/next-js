import {getSession, getClient,AuthConfig}  from '@/lib/lib'
import { IncomingMessage } from 'http'

export async function GET(request: IncomingMessage) {
  const session = await getSession()
  const currentUrl = new URL(request.url??"/")
  
  const client = getClient()
  console.log(currentUrl)
    const tokens = await client.authorizationCode.getTokenFromCodeRedirect(
        currentUrl,
        {
          /**
           * The redirect URI is not actually used for any redirects, but MUST be the
           * same as what you passed earlier to "authorizationCode"
           */
          redirectUri: AuthConfig.redirect_uri,
      
          /**
           * This is optional, but if it's passed then it also MUST be the same as
           * what you passed in the first step.
           *
           * If set, it will verify that the server sent the exact same state back.
           */
          // state: session.state,
      
          codeVerifier:session.code_verifier,
      
        }
      );

    console.log('Token Endpoint Response', tokens)


    session.isLoggedIn = true
    session.access_token = tokens.accessToken
    session.userInfo = {
      sub: 'fake',
      name: 'Faker',
      email: 'fake',
      email_verified: true
    }
    await session.save()
    // return Response.toString()
    return Response.redirect(process.env.NEXT_PUBLIC_APP_URL as string)
}