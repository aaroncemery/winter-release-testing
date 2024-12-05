import { NextResponse } from 'next/server';

export async function GET() {
  const SANITY_API_URL =
    'https://tbw6ylj4.api.sanity.io/v1/data/query/production';
  const QUERY = encodeURIComponent(
    `*[_type == "redirect"] { source, destination, isPermanent }`
  );

  try {
    const response = await fetch(`${SANITY_API_URL}?query=${QUERY}`, {
      headers: {
        Authorization: `Bearer ${process.env.SANITY_API_READ_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch redirects from Sanity');
    }

    const { result } = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching redirects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch redirects' },
      { status: 500 }
    );
  }
}
