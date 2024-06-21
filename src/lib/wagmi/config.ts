'use client';

import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage, http } from 'wagmi';
import { blastSepolia, bscTestnet, sepolia } from 'wagmi/chains';

export const projectId = process.env?.NEXT_PUBLIC_PROJECT_ID || '';

if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Web3Modal Example',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

export const config = defaultWagmiConfig({
  chains: [sepolia],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

const supportedChains: Chain[] = [sepolia, bscTestnet, blastSepolia];

export const rainbowkitConfig = getDefaultConfig({
  appName: 'WalletConnection',
  projectId,
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),
});

export const wagmiConfig = defaultWagmiConfig({
  chains: [sepolia],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
