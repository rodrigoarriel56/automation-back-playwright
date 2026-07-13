Feature: User Management API Testing
  Scenario: Creating a new user
    When I send a "POST" request to "/posts" with the following data:
      | title   | body                   |
      | Sample  | This is a sample post  |
    Then the response status code should be 201
    And the response should contain "Sample"
