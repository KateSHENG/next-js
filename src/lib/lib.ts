import { IronSession, SessionOptions, getIronSession } from 'iron-session'
import { cookies } from 'next/headers'
import { OAuth2Client } from '@badgateway/oauth2-client';
import * as client from 'openid-client'
// // import { Issuer } from 'openid-client'

// export const clientConfig = {
//   url: process.env.NEXT_PUBLIC_API_URL,
//   audience: process.env.NEXT_PUBLIC_API_URL,
//   client_id: process.env.CAS_ID,
//   secret: process.env.clientSecret,
//   scope: process.env.NEXT_PUBLIC_SCOPE,
//   redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/auth/openiddict`,
//   post_logout_redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}`,
//   response_type: 'code',
//   grant_type: 'authorization_code',
//   post_login_route: `${process.env.NEXT_PUBLIC_APP_URL}`,
// }

export const AuthConfig = {
  redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
  scope: ['openid', 'profile','email']
}

export interface SessionData {
  isLoggedIn: boolean
  access_token?: string
  code_verifier?: string,
  state?:string,
  userInfo?: {
    sub: string
    name: string
    email: string
    email_verified: boolean
  }
  tenantId?: string
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
  access_token: undefined,
  code_verifier: undefined,
  userInfo: undefined,
  tenantId: undefined,
}

export const sessionOptions: SessionOptions = {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'next_js_session',
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: process.env.NODE_ENV === 'production',
  },
  ttl: 60 * 60 * 24 * 7, // 1 week
}

export async function getSession(): Promise<IronSession<SessionData>> {
    const cookie = await cookies()
    let session = await getIronSession<SessionData>(cookie, sessionOptions)
    if (!session.isLoggedIn) {
        session.access_token = defaultSession.access_token
        session.userInfo = defaultSession.userInfo
    }
    return session
}


export function getClient(){
    const client = new OAuth2Client({

        // The base URI of your OAuth2 server
        server: process.env.CAS_URL,
      
        // OAuth2 client id
        clientId: process.env.CAS_ID as string,
      
        // OAuth2 client secret. Only required for 'client_credentials', 'password'
        // flows. Don't specify this in insecure contexts, such as a browser using
        // the authorization_code flow.
        // clientSecret: process.env.CAS_SECRET as string,
      
      
        // The following URIs are all optional. If they are not specified, we will
        // attempt to discover them using the oauth2 discovery document.
        // If your server doesn't have support this, you may need to specify these.
        // you may use relative URIs for any of these.
      
      
        // Token endpoint. Most flows need this.
        // If not specified we'll use the information for the discovery document
        // first, and otherwise default to /token
        // tokenEndpoint: '/oidcAccessToken',
      
        // // Authorization endpoint.
        // //
        // // You only need this to generate URLs for authorization_code flows.
        // // If not specified we'll use the information for the discovery document
        // // first, and otherwise default to /authorize
        // authorizationEndpoint: '/oidcAuthorize',
      
        // OAuth2 Metadata discovery endpoint.
        //
        // This document is used to determine various server features.
        // If not specified, we assume it's on /.well-known/oauth2-authorization-server
        discoveryEndpoint: '.well-known/openid-configuration',
      
      });
      return client
}



