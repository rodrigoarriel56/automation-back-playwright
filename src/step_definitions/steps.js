const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const ApiClient = require('../utils/apiClient');
const TokenManager = require('../helpers/tokenManager');
const { expect } = require('@playwright/test');

let apiClient;

Before(async function () {
  // Generate a global token once and reuse across all API calls
  const token = await TokenManager.getToken();
  apiClient = new ApiClient('https://jsonplaceholder.typicode.com', token);
  await apiClient.init();
  this.apiClient = apiClient;
});

After(async function () {
  await apiClient.close();
});

When('I send a {string} request to {string} with the following data:', async function (method, endpoint, dataTable) {
  const data = dataTable.rowsHash(); // Converts data table to object
  this.response = await this.apiClient[method.toLowerCase()](endpoint, data);
});

Then('the response status code should be {int}', async function (statusCode) {
  expect(this.response.status()).toBe(statusCode);
});

Then('the response should contain {string}', async function (expectedValue) {
  const body = await this.response.json();

  const stringifiedBody = JSON.stringify(body);
  expect(stringifiedBody).toContain(expectedValue);
});

