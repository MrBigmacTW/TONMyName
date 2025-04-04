'use client';

import { TonConnectUIProvider, TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';

const fetchTonxBalance = async (address: string, apiKey: string): Promise<string> => {
  try {
    const res = await fetch(`https://api.tonx.chat/v1/address/${address}/balance`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const json = await res.json();
    return json.balance || '0';
  } catch (e) {
    console.error('Error fetching TONX balance:', e);
    return '0';
  }
};

export default function Home() {
  const address = useTonAddress();
  const [balance, setBalance] = useState('');
  const apiKey = process.env.NEXT_PUBLIC_TONXAPI_KEY || '';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@twa-dev/sdk').then(({ default: initTelegramWebApp }) => {
        initTelegramWebApp.ready();
      });
    }
  }, []);

  useEffect(() => {
    if (address) {
      fetchTonxBalance(address, apiKey).then(setBalance);
    }
  }, [address]);

  return (
    <TonConnectUIProvider manifestUrl="https://ton-my-name.vercel.app/tonconnect-manifest.json">
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#f1f5f9] text-center">
        <h1 className="text-2xl font-bold mb-4">TONX 名片</h1>
        <TonConnectButton />
        {address && (
          <div className="mt-6 bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
            <p className="text-gray-500">你的地址：</p>
            <p className="break-words font-mono text-sm">{address}</p>
            <p className="mt-4 text-gray-500">目前餘額：</p>
            <p className="font-bold text-xl">{balance} TON</p>
            <p className="mt-6 text-sm text-gray-600">未來會加入留言牆、搶地盤、FOMO 寶座喔 👑</p>
          </div>
        )}
      </main>
    </TonConnectUIProvider>
  );
}
