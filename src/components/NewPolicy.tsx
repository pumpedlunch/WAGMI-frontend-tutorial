import { useState } from 'react'
import { useAccount, useWaitForTransaction, useNetwork, useToken } from 'wagmi'
import { parseEther, toHex, isAddress } from 'viem'
import {
  useErc20Allowance,
  useErc20Approve,
  usePrepareErc20Approve,
  useInsuranceV2DefaultCurrency,
  useInsuranceV2IssueInsurance,
  usePrepareInsuranceV2IssueInsurance,
  insuranceV2Address
} from '../generated'

interface NewPolicyProps {
  getPolicyIds: () => Promise<void>;
}

export function NewPolicy({ getPolicyIds }: NewPolicyProps) {

  //react state variables
  const [amount, setAmount] = useState('')
  const [payoutAddress, setPayoutAddress] = useState('')
  const [selectedEvent, setSelectedEvent] = useState('Fire')

  //constants
  const events = ['Fire', 'Flood', 'Smart Contract Hack', 'Rugged Again!']

  //wagmi read-only react hooks
  const { address: userAddress } = useAccount()
  const { data: tokenAddress } = useInsuranceV2DefaultCurrency()
  const { data: tokenData } = useToken({
    address: tokenAddress
  })

  const { data: allowance, refetch: refetchAllowance } = useErc20Allowance({
    args: [userAddress as `0x${string}`, insuranceV2Address[5] as `0x${string}`],
    address: tokenData?.address
  })

  // update amount only when it is a valid number
  const updateAmount = (e: string) => {
    if (isNaN(Number(e))) {
      setAmount('')
    } else {
      setAmount(e)
    }
  }

  // ----- ERC20 Approval hooks -----
  const { config: approveConfig } = usePrepareErc20Approve({
    args: [insuranceV2Address[5], parseEther(`${Number(amount)}`)],
    address: tokenData?.address,
  })

  const { data: approveData, write: approveWrite } = useErc20Approve({
    ...approveConfig,
  })

  const { isLoading: approveIsLoading } = useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess: () => {
      refetchAllowance()
    }
  })

  // ----- issueInsurance Hooks -----
  const { config: issueInsuranceConfig } = usePrepareInsuranceV2IssueInsurance({
    args: [parseEther(`${Number(amount)}`), payoutAddress as `0x${string}`, toHex(selectedEvent)],
  })

  const { data: issueInsuranceData, write: issueInsuranceWrite } = useInsuranceV2IssueInsurance({
    ...issueInsuranceConfig
  })

  const { isLoading: issueInsuranceIsLoading } = useWaitForTransaction({
    hash: issueInsuranceData?.hash,
    onSuccess: () => {
      setAmount('')
      setPayoutAddress('')
      getPolicyIds()
    }
  })

  return (
    <div>
      <h3>New Policy</h3>
      <div>
        Policy Amount ({tokenData?.symbol}):
        <input
          onChange={(e) => updateAmount(e.target.value)}
          value={amount}
        />
      </div>
      <div>
        Payout Address:
        <input
          onChange={(e) => setPayoutAddress(e.target.value)}
          value={payoutAddress}
        />
      </div>
      <div>
        Event:
        <select onChange={(e) => setSelectedEvent(e.target.value)}>
          {events.map((event, i) => <option key={i}>{event}</option>)}
        </select>
      </div>
      <div>
        {!approveWrite ||
          approveIsLoading ||
          (allowance ? allowance >= parseEther(`${Number(amount)}`) : Number(amount) <= 0) ||
          !isAddress(payoutAddress) ? (
          <button disabled>
            Approve
          </button>
        ) : (
          <button onClick={() => approveWrite?.()}>
            Approve
          </button>
        )}
        {approveIsLoading && <ProcessingMessage hash={approveData?.hash} />}
      </div>
      <div>
        {!issueInsuranceWrite || issueInsuranceIsLoading ? (
          <button disabled>
            Issue Insurance
          </button>
        ) : (
          <button onClick={() => issueInsuranceWrite?.()}>
            Issue Insurance
          </button>
        )}
        {issueInsuranceIsLoading && <ProcessingMessage hash={issueInsuranceData?.hash} />}
      </div>
    </div>
  )
}

function ProcessingMessage({ hash }: { hash?: `0x${string}` }) {
  const { chain } = useNetwork()
  const etherscan = chain?.blockExplorers?.etherscan
  return (
    <span>
      Processing transaction...{' '}
      {etherscan && (
        <a href={`${etherscan.url}/tx/${hash}`}>{etherscan.name}</a>
      )}
    </span>
  )
}