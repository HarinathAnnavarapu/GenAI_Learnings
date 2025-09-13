Feature: Login to Salesforce

  Scenario Outline: Successful login with valid credentials
    Given I open the Salesforce login page
    When I type "<username>" into the Username field
    And I type "<password>" into the Password field
    And I check the Remember me checkbox if needed
    And I click the Log In button
    Then I should be logged in successfully

  Examples:
    | username                  | password     | 
    | "ravi.kumar@chennai.com"  | "Test@12345" |
    | "anita.menon@bangalore.com"| "Salesforce1"| 
    | "kumar.g@hyderabad.com"   | "Password2023"|

  Scenario: Forgot Password link verification
    Given I open the Salesforce login page
    When I click on the "Forgot Your Password?" link
    Then I should be redirected to the password recovery page

  Scenario Outline: Unsuccessful login with invalid credentials
    Given I open the Salesforce login page
    When I type "<username>" into the Username field
    And I type "<password>" into the Password field
    And I click the Log In button
    Then I should see an error message indicating invalid credentials

  Examples:
    | username                  | password     | 
    | "invalid.user@domain.com"| "WrongPass123"|
    | "test.user@fake.com"     | "123456"    |