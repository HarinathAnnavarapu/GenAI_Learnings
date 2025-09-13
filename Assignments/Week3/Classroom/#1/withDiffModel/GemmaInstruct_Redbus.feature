Feature: Bus Search

Scenario Outline: Search for buses from Chennai to Bangalore
  Given I open the bus search page
  When I select "Chennai" from the "From" dropdown
  And I select "Bangalore" from the "To" dropdown
  And I select "13 Sep, 2025" from the "Date of Journey" dropdown
  And I click the "Search buses" button
  Then I should see search results for buses from Chennai to Bangalore

Examples:
  | From | To | Date of Journey |
  | Chennai | Bangalore | 13 Sep, 2025 | 

Scenario Outline: Search for buses from Coimbatore to Madurai
  Given I open the bus search page
  When I select "Coimbatore" from the "From" dropdown
  And I select "Madurai" from the "To" dropdown
  And I select "13 Sep, 2025" from the "Date of Journey" dropdown
  And I click the "Search buses" button
  Then I should see search results for buses from Coimbatore to Madurai

Examples:
  | From | To | Date of Journey |
  | Coimbatore | Madurai | 13 Sep, 2025 |