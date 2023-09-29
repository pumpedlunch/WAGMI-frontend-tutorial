import { useWaitForTransaction } from 'wagmi'
import {
    usePrepareInsuranceV2RequestPayout,
    useInsuranceV2RequestPayout,
} from '../generated'

interface RequestPayoutProps {
    policyId: `0x${string}`;
    refetchPolicy: () => void;
}

export function RequestPayout({ policyId, refetchPolicy }: RequestPayoutProps) {
    const { config } = usePrepareInsuranceV2RequestPayout({
        args: policyId && [policyId],
    })
    const { data, write } = useInsuranceV2RequestPayout({
        ...config
    })

    const { isLoading } = useWaitForTransaction({
        hash: data?.hash,
        onSuccess: () => {
            console.log("request payout - update policies")
            refetchPolicy()
        }
    })

    return (
        <button disabled={!write || isLoading} onClick={() => write?.()}>
            Request Payout
        </button>
    )
}