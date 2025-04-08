import React from 'react'
import ReactDOM from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import App from './App'
import './index.css'

console.log('Starting app...')

ReactDOM.createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider 
    manifestUrl="/tonconnect-manifest.json"
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
  >
    <App />
  </TonConnectUIProvider>
) 