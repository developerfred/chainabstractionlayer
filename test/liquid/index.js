
import liquidNetworks from '../../packages/liquid-networks/lib/index'
import LiquidJsWalletProvider from '../../packages/liquid-js-wallet-provider/lib/index'

describe('liquid-wallet-provider', () => {
  const regtest = liquidNetworks.liquid_regtest

  it('returns 5 confidential blech32 addresses', async () => {
    const provider = new LiquidJsWalletProvider(regtest, 'unique chef tool note evoke stem uncover buzz fit spin actual leopard', 'blech32')
    const addrs = await provider.getConfidentialAddresses(0, 5, false)
    console.log(addrs)
  })

  it('returns 5 unconfidential bech32 addresses', async () => {
    const provider = new LiquidJsWalletProvider(regtest, 'unique chef tool note evoke stem uncover buzz fit spin actual leopard', 'bech32')
    const addrs = await provider.getAddresses(0, 5, false)
    console.log(addrs)
  })
})