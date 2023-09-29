import { useState, useEffect } from 'react'
import { http, createPublicClient } from 'viem'
import { goerli } from 'viem/chains'
import {
    insuranceV2Address,
    insuranceV2ABI,
} from '../generated'

export function OracleLink({ policyId }: { policyId?: `0x${string}` }) {
    const [txHash, setTxHash] = useState('')
    const payoutRequestedEvent = insuranceV2ABI[2]

    useEffect(() => {
        getTxHash()
        console.log("running useEffect from OracleLink")
    }, []);

    const getTxHash = async () => {
        try {
            const client = createPublicClient({
                chain: goerli,
                transport: http(`https://eth-goerli.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`)
            })
            const [{ transactionHash: _txHash }] = await client.getLogs({
                event: payoutRequestedEvent,
                fromBlock: BigInt(9677567),
                address: insuranceV2Address[goerli.id],
                args: {
                    policyId: policyId
                }
            })
            if (_txHash) setTxHash(_txHash)
        } catch (error) {
            console.log(`error fetching payoutRequestedEvents for policyId = ${policyId}`)
            console.log(error)
        }
    }

    return (
        <>
            {txHash && <a href={`https://testnet.oracle.uma.xyz/?transactionHash=${txHash}&eventIndex=0`} target="_blank">
                <div>
                    View on Oracle
                </div>
            </a>}
        </>
    )
}