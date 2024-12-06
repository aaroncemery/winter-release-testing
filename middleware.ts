// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // For debugging - this should show up in your terminal/server logs
  console.log('middleware running', req.nextUrl.pathname);

  const url = req.nextUrl.clone();

  try {
    // Use the absolute URL of your deployment, or better yet,
    // access your data source directly instead of via API
    const response = await fetch(`${req.nextUrl.origin}/api/redirects`);
    const redirects = await response.json();

    console.log('redirects:', redirects);

    const redirect = redirects.find(
      (r: { source: string }) => url.pathname === r.source
    );

    if (redirect) {
      return NextResponse.redirect(new URL(redirect.destination, req.url), {
        status: redirect.isPermanent ? 301 : 302,
      });
    }
  } catch (error) {
    console.error('Middleware error:', error);
  }

  return NextResponse.next();
}
