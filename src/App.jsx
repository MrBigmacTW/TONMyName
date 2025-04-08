import React, { useEffect, useState } from 'react'
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'
import TonxApiService from './services/tonxApi'
import './App.css'

const tonxApi = new TonxApiService(import.meta.env.VITE_TONX_API_TOKEN);

function App() {
  const { connected, account } = useTonConnectUI();
  const [botInfo, setBotInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (connected) {
      fetchBotInfo();
    }
  }, [connected]);

  const fetchBotInfo = async () => {
    try {
      setLoading(true);
      const info = await tonxApi.getBotInfo();
      setBotInfo(info);
    } catch (error) {
      console.error('Error fetching bot info:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessageToBot = async () => {
    if (!connected || !account) return;

    try {
      setLoading(true);
      await tonxApi.sendBotMessage(
        import.meta.env.VITE_BOT_CHAT_ID,
        `新用戶連接！\n地址: ${account.address}`
      );
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

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
            <p>地址：{account?.address}</p>
            
            <div className="bot-section">
              <h3>Bot 狀態</h3>
              {loading ? (
                <p>載入中...</p>
              ) : botInfo ? (
                <div>
                  <p>Bot 名稱: {botInfo.username}</p>
                  <button 
                    onClick={sendMessageToBot}
                    disabled={loading}
                    className="bot-button"
                  >
                    發送測試消息到 Bot
                  </button>
                </div>
              ) : (
                <p>無法載入 Bot 資訊</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App 