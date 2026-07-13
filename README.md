# API Testing Framework with Playwright and Cucumber

This repository contains a scalable and reusable API testing framework built with Playwright and Cucumber. The framework emphasizes reusability, clarity, and maintainability, using features like hooks, reusable components, dynamic steps, and structured data input to streamline API testing.

## Features

- **Token Management**: Centralized token generation and usage across tests for efficiency.
- **Context Isolation**: New context creation for each test, enabling parallel execution.
- **Dynamic Step Definitions**: Handle multiple HTTP methods within a single reusable step.
- **Data Tables**: Structured input data for enhanced readability and easier maintenance.
- **Reusable Components**: Common API interactions encapsulated in a reusable `ApiClient` class.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/api-testing-framework.git
   ```
2. Navigate to the project directory:
   ```
   cd api-testing-framework
   ```
3. Install dependencies using Yarn:
   ```
   yarn install
   ```

## Usage

- To run tests, use the following command:
  ```
  yarn test
  ```

## File Structure

- **src/features/**: Contains feature files and step definitions written in Gherkin syntax.
- **src/step_definitions/**: Contains Cucumber step definitions.
- **src/helpers/**: Utility functions like token generation.
- **src/utils/**: Reusable classes like `ApiClient`.

## Example

### Feature File

```gherkin
Feature: User Management API Testing
  Scenario: Creating a new user
    When I send a "POST" request to "/posts" with the following data:
      | title  | body                  |
      | Sample | This is a sample post |
    Then the response status code should be 201
    And the response should contain "Sample"
```

### Step Definition

```javascript
When('I send a {string} request to {string} with the following data:', async function (method, endpoint, dataTable) {
  const data = dataTable.rowsHash();
  this.response = await this.apiClient[method.toLowerCase()](endpoint, data);
});
```

## Customization

Feel free to modify and extend the framework to fit your project's requirements. You can customize the `TokenManager`, add more methods to the `ApiClient`, and define additional step definitions as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy Testing! 🚀
