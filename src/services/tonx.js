const TONX_API_BASE = 'https://tonapi.io/v2';

export const tonxApi = {
  async getUserInfo(address) {
    try {
      const response = await fetch(`${TONX_API_BASE}/accounts/${address}`, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_TONX_API_KEY}`
        }
      });
      return await response.json();
    } catch (error) {
      console.error('Error fetching user info:', error);
      return null;
    }
  },

  async getDomains(address) {
    try {
      const response = await fetch(`${TONX_API_BASE}/dns/domains?owner=${address}`, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_TONX_API_KEY}`
        }
      });
      return await response.json();
    } catch (error) {
      console.error('Error fetching domains:', error);
      return [];
    }
  },

  async getNFTs(address) {
    try {
      const response = await fetch(`${TONX_API_BASE}/accounts/${address}/nfts`, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_TONX_API_KEY}`
        }
      });
      return await response.json();
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      return [];
    }
  }
}; 