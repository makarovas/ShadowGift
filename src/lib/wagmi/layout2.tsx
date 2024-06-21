import { headers } from 'next/headers';
import { type ReactNode } from 'react';
import { cookieToInitialState } from 'wagmi';

import { config } from './config2';
import { Providers } from './providers2';

export default function Layout({ children }: { children: ReactNode }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'));
  return (
    <html lang='en'>
      <body>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}
