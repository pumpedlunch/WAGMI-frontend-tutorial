import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { erc20ABI } from 'wagmi'
import { insuranceV2Abi } from './abis/insuranceV2ABI'

export default defineConfig(() => {
  return {
    out: 'src/generated.ts',
    contracts: [
      {
        abi: insuranceV2Abi,
        name: 'InsuranceV2',
        address: {
          [chains.goerli.id]: '0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5',
        },
      },
      {
        abi: erc20ABI,
        name: 'erc20'
      }
    ],
    plugins: [react()],
  }
})
