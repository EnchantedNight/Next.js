'use client';

import { ClerkProvider } from '@clerk/nextjs';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';

const clerkPublishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  const schema = (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  return clerkPublishableKey ? (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      {schema}
    </ClerkProvider>
  ) : (
    schema
  );
}
