'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';

import React, { ReactNode } from 'react';
import { State, WagmiProvider } from 'wagmi';
import { projectId, rainbowkitConfig } from './config';

if (!projectId) throw new Error('Project ID is not defined');

createWeb3Modal({
  wagmiConfig: rainbowkitConfig,
  projectId,
  enableAnalytics: true, // Optional
});

export const WagmiProviderComp = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <WagmiProvider config={rainbowkitConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
export default WagmiProviderComp;
