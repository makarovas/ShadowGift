'use client';

import '@rainbow-me/rainbowkit/styles.css';

import Providers from '@/lib/wagmi/providers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
