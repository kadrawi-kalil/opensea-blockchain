import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

import { MariemProvider } from '../context/MariemContext'
/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <MariemProvider>
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />

    </ThirdwebWeb3Provider>
    </MariemProvider>
  )
}

export default MyApp
