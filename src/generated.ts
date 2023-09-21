import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  Address,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InsuranceV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export const insuranceV2ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_defaultCurrency', internalType: 'address', type: 'address' },
      { name: '_optimisticOracleV3', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'policyId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'insuredEvent',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
      {
        name: 'insuranceAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'payoutAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'InsuranceIssued',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'policyId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'assertionId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'InsurancePayoutRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'policyId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'assertionId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'InsurancePayoutSettled',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'assertedPolicies',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'assertionId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'assertionDisputedCallback',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'assertionLiveness',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'assertionId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'assertedTruthfully', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertionResolvedCallback',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'defaultCurrency',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'defaultIdentifier',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'insuranceAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'payoutAddress', internalType: 'address', type: 'address' },
      { name: 'insuredEvent', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'issueInsurance',
    outputs: [{ name: 'policyId', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'oo',
    outputs: [
      {
        name: '',
        internalType: 'contract OptimisticOracleV3Interface',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'policies',
    outputs: [
      { name: 'insuranceAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'payoutAddress', internalType: 'address', type: 'address' },
      { name: 'insuredEvent', internalType: 'bytes', type: 'bytes' },
      {
        name: 'status',
        internalType: 'enum InsuranceV2.Status',
        type: 'uint8',
      },
      { name: 'assertionId', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'policyId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'requestPayout',
    outputs: [
      { name: 'assertionId', internalType: 'bytes32', type: 'bytes32' },
    ],
  },
] as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export const insuranceV2Address = {
  5: '0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5',
} as const

/**
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export const insuranceV2Config = {
  address: insuranceV2Address,
  abi: insuranceV2ABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link insuranceV2ABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof insuranceV2ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractRead({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    ...config,
  } as UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"assertedPolicies"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2AssertedPolicies<
  TFunctionName extends 'assertedPolicies',
  TSelectData = ReadContractResult<typeof insuranceV2ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractRead({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'assertedPolicies',
    ...config,
  } as UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"assertionLiveness"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2AssertionLiveness<
  TFunctionName extends 'assertionLiveness',
  TSelectData = ReadContractResult<typeof insuranceV2ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractRead({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'assertionLiveness',
    ...config,
  } as UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"defaultCurrency"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2DefaultCurrency<
  TFunctionName extends 'defaultCurrency',
  TSelectData = ReadContractResult<typeof insuranceV2ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractRead({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'defaultCurrency',
    ...config,
  } as UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"defaultIdentifier"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2DefaultIdentifier<
  TFunctionName extends 'defaultIdentifier',
  TSelectData = ReadContractResult<typeof insuranceV2ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractRead({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'defaultIdentifier',
    ...config,
  } as UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"oo"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2Oo<
  TFunctionName extends 'oo',
  TSelectData = ReadContractResult<typeof insuranceV2ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractRead({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'oo',
    ...config,
  } as UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"policies"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2Policies<
  TFunctionName extends 'policies',
  TSelectData = ReadContractResult<typeof insuranceV2ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractRead({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'policies',
    ...config,
  } as UseContractReadConfig<typeof insuranceV2ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof insuranceV2Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof insuranceV2ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      > & { address?: Address; chainId?: TChainId }
    : UseContractWriteConfig<typeof insuranceV2ABI, TFunctionName, TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
      } = {} as any,
) {
  return useContractWrite<typeof insuranceV2ABI, TFunctionName, TMode>({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"assertionDisputedCallback"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2AssertionDisputedCallback<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof insuranceV2Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof insuranceV2ABI,
          'assertionDisputedCallback'
        >['request']['abi'],
        'assertionDisputedCallback',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'assertionDisputedCallback'
      }
    : UseContractWriteConfig<
        typeof insuranceV2ABI,
        'assertionDisputedCallback',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'assertionDisputedCallback'
      } = {} as any,
) {
  return useContractWrite<
    typeof insuranceV2ABI,
    'assertionDisputedCallback',
    TMode
  >({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'assertionDisputedCallback',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"assertionResolvedCallback"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2AssertionResolvedCallback<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof insuranceV2Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof insuranceV2ABI,
          'assertionResolvedCallback'
        >['request']['abi'],
        'assertionResolvedCallback',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'assertionResolvedCallback'
      }
    : UseContractWriteConfig<
        typeof insuranceV2ABI,
        'assertionResolvedCallback',
        TMode
      > & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'assertionResolvedCallback'
      } = {} as any,
) {
  return useContractWrite<
    typeof insuranceV2ABI,
    'assertionResolvedCallback',
    TMode
  >({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'assertionResolvedCallback',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"issueInsurance"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2IssueInsurance<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof insuranceV2Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof insuranceV2ABI,
          'issueInsurance'
        >['request']['abi'],
        'issueInsurance',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'issueInsurance'
      }
    : UseContractWriteConfig<typeof insuranceV2ABI, 'issueInsurance', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'issueInsurance'
      } = {} as any,
) {
  return useContractWrite<typeof insuranceV2ABI, 'issueInsurance', TMode>({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'issueInsurance',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"requestPayout"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2RequestPayout<
  TMode extends WriteContractMode = undefined,
  TChainId extends number = keyof typeof insuranceV2Address,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof insuranceV2ABI,
          'requestPayout'
        >['request']['abi'],
        'requestPayout',
        TMode
      > & {
        address?: Address
        chainId?: TChainId
        functionName?: 'requestPayout'
      }
    : UseContractWriteConfig<typeof insuranceV2ABI, 'requestPayout', TMode> & {
        abi?: never
        address?: never
        chainId?: TChainId
        functionName?: 'requestPayout'
      } = {} as any,
) {
  return useContractWrite<typeof insuranceV2ABI, 'requestPayout', TMode>({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'requestPayout',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function usePrepareInsuranceV2Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof insuranceV2ABI, TFunctionName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return usePrepareContractWrite({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    ...config,
  } as UsePrepareContractWriteConfig<typeof insuranceV2ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"assertionDisputedCallback"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function usePrepareInsuranceV2AssertionDisputedCallback(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof insuranceV2ABI,
      'assertionDisputedCallback'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return usePrepareContractWrite({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'assertionDisputedCallback',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof insuranceV2ABI,
    'assertionDisputedCallback'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"assertionResolvedCallback"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function usePrepareInsuranceV2AssertionResolvedCallback(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof insuranceV2ABI,
      'assertionResolvedCallback'
    >,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return usePrepareContractWrite({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'assertionResolvedCallback',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof insuranceV2ABI,
    'assertionResolvedCallback'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"issueInsurance"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function usePrepareInsuranceV2IssueInsurance(
  config: Omit<
    UsePrepareContractWriteConfig<typeof insuranceV2ABI, 'issueInsurance'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return usePrepareContractWrite({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'issueInsurance',
    ...config,
  } as UsePrepareContractWriteConfig<typeof insuranceV2ABI, 'issueInsurance'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link insuranceV2ABI}__ and `functionName` set to `"requestPayout"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function usePrepareInsuranceV2RequestPayout(
  config: Omit<
    UsePrepareContractWriteConfig<typeof insuranceV2ABI, 'requestPayout'>,
    'abi' | 'address' | 'functionName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return usePrepareContractWrite({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    functionName: 'requestPayout',
    ...config,
  } as UsePrepareContractWriteConfig<typeof insuranceV2ABI, 'requestPayout'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link insuranceV2ABI}__.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof insuranceV2ABI, TEventName>,
    'abi' | 'address'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractEvent({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    ...config,
  } as UseContractEventConfig<typeof insuranceV2ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link insuranceV2ABI}__ and `eventName` set to `"InsuranceIssued"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2InsuranceIssuedEvent(
  config: Omit<
    UseContractEventConfig<typeof insuranceV2ABI, 'InsuranceIssued'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractEvent({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    eventName: 'InsuranceIssued',
    ...config,
  } as UseContractEventConfig<typeof insuranceV2ABI, 'InsuranceIssued'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link insuranceV2ABI}__ and `eventName` set to `"InsurancePayoutRequested"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2InsurancePayoutRequestedEvent(
  config: Omit<
    UseContractEventConfig<typeof insuranceV2ABI, 'InsurancePayoutRequested'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractEvent({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    eventName: 'InsurancePayoutRequested',
    ...config,
  } as UseContractEventConfig<
    typeof insuranceV2ABI,
    'InsurancePayoutRequested'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link insuranceV2ABI}__ and `eventName` set to `"InsurancePayoutSettled"`.
 *
 * [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3ca77D262736eB3345bF9Ea4b8E0783Aa8a355f5)
 */
export function useInsuranceV2InsurancePayoutSettledEvent(
  config: Omit<
    UseContractEventConfig<typeof insuranceV2ABI, 'InsurancePayoutSettled'>,
    'abi' | 'address' | 'eventName'
  > & { chainId?: keyof typeof insuranceV2Address } = {} as any,
) {
  return useContractEvent({
    abi: insuranceV2ABI,
    address: insuranceV2Address[5],
    eventName: 'InsurancePayoutSettled',
    ...config,
  } as UseContractEventConfig<typeof insuranceV2ABI, 'InsurancePayoutSettled'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: erc20ABI, ...config } as UseContractReadConfig<
    typeof erc20ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"allowance"`.
 */
export function useErc20Allowance<
  TFunctionName extends 'allowance',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'allowance',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
  TFunctionName extends 'decimals',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'decimals',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"name"`.
 */
export function useErc20Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc20Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc20TotalSupply<
  TFunctionName extends 'totalSupply',
  TSelectData = ReadContractResult<typeof erc20ABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc20ABI,
    functionName: 'totalSupply',
    ...config,
  } as UseContractReadConfig<typeof erc20ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof erc20ABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof erc20ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, TFunctionName, TMode>({
    abi: erc20ABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc20Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof erc20ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'approve', TMode>({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function useErc20Transfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transfer'
        >['request']['abi'],
        'transfer',
        TMode
      > & { functionName?: 'transfer' }
    : UseContractWriteConfig<typeof erc20ABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transfer', TMode>({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc20TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof erc20ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof erc20ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof erc20ABI, 'transferFrom', TMode>({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__.
 */
export function usePrepareErc20Write<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc20Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareErc20Transfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transfer',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transfer'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc20TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc20ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc20ABI, 'transferFrom'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__.
 */
export function useErc20Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc20ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc20ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc20TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof erc20ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc20ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof erc20ABI, 'Transfer'>)
}
