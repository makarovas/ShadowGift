import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppContext, AppProps } from 'next/app';

import { config } from '@/lib/wagmi/config';
import WagmiProviderComp from '@/lib/wagmi/wagmi-provider';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { cookieToInitialState } from 'wagmi';
import { fonts } from '../lib/fonts';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js App',
  description: 'Next.js App',
};

interface MyAppProps extends AppProps {
  initialState: any; //FIXME - complete configuration
  getInitialProps: any;
}

export default function App({ Component, pageProps }: MyAppProps) {
  const initialState = cookieToInitialState(config, headers().get('cookie'));
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
          }
        `}
      </style>
      <WagmiProviderComp initialState={initialState}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </WagmiProviderComp>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps: any = await App.getInitialProps(appContext);
  const cookies = appContext.ctx.req ? appContext.ctx.req.headers.cookie : null;
  const initialState = cookieToInitialState(config, cookies);

  return { ...appProps, initialState };
};
