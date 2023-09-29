import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { http, createPublicClient } from 'viem'
import { goerli } from 'viem/chains'

import { PolicyData } from './PolicyData'
import { NewPolicy } from './NewPolicy'

import {
    insuranceV2Address,
    insuranceV2ABI,
} from '../generated'

export function Policies() {
    // define react state variables
    const [policyIds, setPolicyIds] = useState([] as `0x${string}`[])

    // wagmi react hooks
    const { isConnected } = useAccount()

    // set useEffect to run only on page load
    useEffect(() => {
        getPolicyIds()
        console.log("running useEffect from Policies")
    }, []);

    const getPolicyIds = async () => {
        // fetch policy ids from insurance contract
        try {
            console.log("running getPolicyIds")
            const client = createPublicClient({
                transport: http(`https://eth-goerli.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`)
            })

            const issuedLogs = await client.getLogs({
                event: insuranceV2ABI[1],
                fromBlock: BigInt(9677567),
                address: insuranceV2Address[goerli.id]
            })
            console.log("issuedLogs")
            console.log(issuedLogs)

            const _policyIds: `0x${string}`[] = []
            issuedLogs.forEach((log) => {
                log.args.policyId && _policyIds.push(log.args.policyId)
            })
            setPolicyIds(_policyIds)
        }
        catch (error) {
            console.log("error in getPolicyIds")
            console.log(error)
        }
    }

    return (
        <>
            {isConnected && (
                <>
                    <NewPolicy getPolicyIds={getPolicyIds} />
                </>)}
            <h3>Existing Policies</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Insured Event</th>
                            <th>Beneficiary</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {policyIds.map((policyId, i) => (
                            <tr key={i}>
                                <PolicyData policyId={policyId} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ >
    )
}