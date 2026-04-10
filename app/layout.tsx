import type { Metadata } from 'next';
import '../assets/css/index.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(window.location.origin),
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
      </body>
    </html>
  );
}
