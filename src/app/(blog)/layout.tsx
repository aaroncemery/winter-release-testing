// src/app/(blog)/layout.tsx

import { SanityLive } from '@/sanity/lib/live';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen bg-white'>
      {children}
      <SanityLive />
    </div>
  );
}
