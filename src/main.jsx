import React from 'react'
import ReactDOM from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import App from './App'
import './index.css'

// 配置 manifest URL
const manifestUrl = `https://ton-my-name.vercel.app/tonconnect-manifest.json`

console.log('Starting app...')

ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider 
    manifestUrl={manifestUrl}
    connectRequestParameters={{
      state: 'ready',
      permissions: ['ton_addr']
    }}
    uiPreferences={{
      theme: 'SYSTEM',
      borderRadius: 'm'
    }}
    walletsListConfiguration={{
      includeWallets: ['tonkeeper', 'openmask', 'tonhub']
    }}
    actionsConfiguration={{
      twaReturnUrl: 'https://ton-my-name.vercel.app'
    }}
  >
    <App />
  </TonConnectUIProvider>
) 