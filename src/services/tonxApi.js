// TONX API 服務
const TONX_API_BASE_URL = 'https://api.tonx.app/v1';

class TonxApiService {
  constructor(apiToken) {
    this.apiToken = apiToken;
  }

  // 基本的 API 請求方法
  async makeRequest(endpoint, method = 'GET', body = null) {
    const headers = {
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    };

    const options = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    };

    try {
      const response = await fetch(`${TONX_API_BASE_URL}${endpoint}`, options);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('TONX API Error:', error);
      throw error;
    }
  }

  // 發送消息到 Bot
  async sendBotMessage(chatId, text) {
    return this.makeRequest('/bot/sendMessage', 'POST', {
      chat_id: chatId,
      text: text
    });
  }

  // 獲取 Bot 資訊
  async getBotInfo() {
    return this.makeRequest('/bot/getMe');
  }

  // 獲取聊天記錄
  async getChatUpdates() {
    return this.makeRequest('/bot/getUpdates');
  }

  // 設置 Bot 命令
  async setBotCommands(commands) {
    return this.makeRequest('/bot/setMyCommands', 'POST', {
      commands: commands
    });
  }
}

export default TonxApiService; 