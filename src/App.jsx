import React from 'react'
import { TonConnectButton } from '@tonconnect/ui-react'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>TON Name Service</h1>
        <TonConnectButton />
      </header>

      <main className="main-content">
        <div className="disconnected-content">
          <h2>請連接您的錢包以繼續</h2>
          <p>連接錢包後即可註冊和管理您的 TON 域名</p>
        </div>
      </main>
    </div>
  )
}

export default App 