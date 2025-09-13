Feature: Search for bus tickets

  Scenario Outline: Search for bus tickets with different parameters
    Given I open the bus ticket search page
    When I click the "From" field
    And I select "<from_city>" as the source city
    And I click the "To" field
    And I select "<to_city>" as the destination city
    And I click the "Date of Journey" field
    And I select "<journey_date>" as the travel date
    And I toggle the "Booking for women" option to "<women_booking>"
    And I click the "Search buses" button
    Then I should see the search results for the given criteria

  Examples:
    | from_city      | to_city        | journey_date | women_booking |
    | "Chennai"      | "Bangalore"   | "Today"      | "On"          |
    | "Bangalore"   | "Hyderabad"   | "Tomorrow"   | "Off"         |
    | "Hyderabad"   | "Chennai"      | "Today"      | "On"          |
    | "Coimbatore"  | "Bangalore"    | "Tomorrow"   | "Off"         |