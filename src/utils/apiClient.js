const { request } = require('playwright');

class ApiClient {
  constructor(baseURL, token) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async init() {
    this.client = await request.newContext({
      baseURL: this.baseURL,
      extraHTTPHeaders: { Authorization: `Bearer ${this.token}` }
    });
  }

  async post(endpoint, data = {}) {
    return await this.client.post(endpoint, { data });
  }

  async get(endpoint) {
    return await this.client.get(endpoint);
  }

  async close() {
    await this.client.dispose();
  }
}

module.exports = ApiClient;
