import { formatEther, fromHex } from 'viem'
import { RequestPayout } from './RequestPayout'
import { OracleLink } from './OracleLink'
import {
    useInsuranceV2Policies,
} from '../generated'

export function PolicyData({ policyId }: { policyId?: `0x${string}` }) {
    const STATUS_ENUM = [
        'Uninitialized',
        'Open',
        'Requested',
        'Closed',
    ]

    //wagmi react hooks
    const { data: policy, refetch } = useInsuranceV2Policies({ args: policyId ? [policyId] : undefined })

    const refetchPolicy = () => {
        console.log('refetchPolciies')
        refetch()
    }

    return (
        <>
            <td> {policy?.[2] && fromHex(policy[2], 'string')}</td>
            <td> {policy?.[1] && policy[1]}</td>
            <td> {policy?.[0] ? formatEther(policy[0]) : ''} </td>
            <td> {policy?.[3] && STATUS_ENUM[policy[3]]} </td>
            <td>
                {policy && STATUS_ENUM[policy[3]] === 'Open' ? (
                    <RequestPayout policyId={policyId as `0x${string}`} refetchPolicy={refetchPolicy} />
                ) : (policy && STATUS_ENUM[policy[3]] === 'Requested' || 'Closed' ? (
                    <div>
                        <OracleLink policyId={policyId}/>
                    </div>
                ) : (
                    ''
                ))
                }
            </td>
        </>
    )
}