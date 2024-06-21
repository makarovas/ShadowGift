import Layout from '@/lib/wagmi/layout';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { fonts } from '../lib/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Layout>
    </>
  );
}
