import { Link } from '@chakra-ui/next-js';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Shadow gift</title>
        <meta name='description' content='shadow gift' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <main>
        <ul>
          <li>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
              About Us
            </Link>
          </li>
          <li>
            <Link href='/login' color='blue.400' _hover={{ color: 'blue.500' }}>
              Login
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
