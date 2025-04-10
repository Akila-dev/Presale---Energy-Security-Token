// middleware.js
import { NextResponse } from 'next/server';

/**
 * Basic Auth Middleware compatible with Edge Runtime:
 * Uses atob() instead of Buffer for base64 decoding.
 */
export function middleware(request) {
  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {
    // basicAuth might look like "Basic YWRtaW46c3VwZXJzZWNyZXQ="
    const authValue = basicAuth.split(' ')[1];
    if (authValue) {
      // Decode with atob() instead of Buffer
      const [user, password] = atob(authValue).split(':');
      // Replace these credentials with your desired username/password
      if (user === 'admin' && password === 'bahamasBileet69') {
        return NextResponse.next();
      }
    }
  }

  // If credentials are invalid or missing, prompt for basic auth again
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Match all routes except for /api routes (adjust as needed):
export const config = {
  matcher: ['/((?!api).*)'],
};
