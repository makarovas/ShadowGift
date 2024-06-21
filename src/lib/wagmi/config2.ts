import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { sepolia } from 'wagmi/chains';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error('Project ID is not defined');




// import { cookieStorage, createConfig, createStorage, http } from 'wagmi';
// import { mainnet, sepolia } from 'wagmi/chains';

// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   ssr: true,
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// });
