import React from 'react'
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'

function App() {
  const [tonConnectUI] = useTonConnectUI();

  return (
    <div className="container">
      <header className="header">
        <h1>TON Name Service</h1>
        <TonConnectButton />
      </header>

      <main className="main-content">
        {tonConnectUI.connected ? (
          <div className="connected-content">
            <h2>註冊您的 TON 域名</h2>
            {/* 這裡之後會添加域名註冊表單 */}
          </div>
        ) : (
          <div className="disconnected-content">
            <h2>請連接您的錢包以繼續</h2>
            <p>連接錢包後即可註冊和管理您的 TON 域名</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App 