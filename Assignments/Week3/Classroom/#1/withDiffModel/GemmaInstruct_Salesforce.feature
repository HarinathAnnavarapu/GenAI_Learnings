Feature: Login to Salesforce

  Scenario Outline: Successful login with valid credentials
    Given I open the login page
    When I type "<username>" into the Username field
    And I type "<password>" into the Password field
    And I click the "Log In" button
    Then I should be logged in successfully

    Examples:
      | username   | password  |
      | "siva.kumar@example.com" | "P@$$w0rd123" |
      | "ramya.s@example.com" | "SecureP@ss" |
      | "vijay.krishnan@example.com" | "MyStrongPassword" |

  Scenario Outline: Login with saved username
    Given I open the login page
    When I select "<saved_username>" from the Saved Usernames dropdown
    And I type "<password>" into the Password field
    And I click the "Log In" button
    Then I should be logged in successfully

    Examples:
      | saved_username | password  |
      | "siva.kumar@example.com" | "P@$$w0rd123" |
      | "ramya.s@example.com" | "SecureP@ss" |