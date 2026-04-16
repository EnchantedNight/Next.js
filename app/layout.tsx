import type { Metadata } from 'next';
import '../assets/css/index.css';
import { Providers } from './providers';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` ||
      'https://vercel.com',
  ),
  title: {
    default: 'Next Starter',
    template: '%s | Next Starter',
  },
  description:
    'Minimal and opinionated Next.js template for shipping on Vercel, includes optional auth and database integrations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-black">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
