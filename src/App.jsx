import React from 'react'
import { TonConnectButton, useTonConnect } from '@tonconnect/ui-react'
import './App.css'

function App() {
  const { connected, wallet } = useTonConnect();

  return (
    <div className="container">
      <header className="header">
        <h1>TON Name Service</h1>
        <TonConnectButton />
      </header>

      <main className="main-content">
        {!connected ? (
          <div className="disconnected-content">
            <h2>請連接您的錢包以繼續</h2>
            <p>連接錢包後即可查看您的 TON 域名</p>
          </div>
        ) : (
          <div className="connected-content">
            <h2>已連接的錢包</h2>
            <p>地址：{wallet?.account.address}</p>
            <div className="domain-info">
              <h3>您的 TON 域名</h3>
              <p>正在載入您的域名資訊...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App 