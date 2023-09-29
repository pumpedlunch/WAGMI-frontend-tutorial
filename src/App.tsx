import { useAccount } from 'wagmi'
import { Policies } from './components/Policies'
import { Account } from './components/Account'
import { Connect } from './components/Connect'
import { NetworkSwitcher } from './components/NetworkSwitcher'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>WAGMI UMA Insurance Frontend</h1>

      <Connect />

      {isConnected && (
        <>
          <h3>Account</h3>
          <Account />
          <h3>NetworkSwitcher</h3>
          <NetworkSwitcher />
        </>
      )}
      <Policies/>
    </>
  )
}
