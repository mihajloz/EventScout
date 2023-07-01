# EventMap

## Description

The app allows users to discover upcoming events in various cities chosen by the user. The app will allow users to access cached data about events offline.

## Features

### FEATURE 1: Filter Events By City

As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

#### 1. **SCENARIO 1: When user hasn’t searched for a city, show upcoming events from all cities.**

Given the user hasn't entered a city in the search filter
When the user opens the app
Then the app should display a list of upcoming events from all cities

#### 2. **SCENARIO 2: User should see a list of suggestions when they search for a city.**

Given the user is on the main page of the app
When the user starts typing in the city search filter
Then the app should display a list of suggested cities that match the user's input

#### 3. **SCENARIO 3: User can select a city from the suggested list.**

Given the user is typing in the search filter and the suggested cities list is visible
When the user selects a city from the suggested list
Then the app should update the search filter with the selected city and display upcoming events in that city

### FEATURE 2: Show/Hide Event Details

As a user,
I should be able to show/hide event details
So that I can easily focus on the information I need and reduce clutter.

#### 1. **SCENARIO 1: An event element is collapsed by default.**

- Given the user is viewing a list of events
- When the user opens the app or navigates to the event list
- Then the app should display each event element in a collapsed state, showing only basic information

#### 2. **SCENARIO 2: User can expand an event to see details.**

Given the user is viewing a list of events with collapsed event elements
When the user clicks on an event
Then the app should expand the event element to show additional details about the event

#### 3. **SCENARIO 3: User can collapse an event to hide details.**

Given the user is viewing a list of events with expanded event elements
When the user clicks on a previously expanded event element
Then the app should collapse the event element, hiding the additional details

### FEATURE 3: Specify Number of Events

As a user,
I should be able to specify the number of events to be displayed
So that I can customize the amount of information I want to see at a time.

#### 1. **SCENARIO 1: When user hasn’t specified a number, 32 events are shown by default.**

Given the user hasn't specified a number of events to display
When the user opens the app or navigates to the event list
Then the app should display 32 events as a default number

#### 2. **SCENARIO 2: User can change the number of events displayed.**

Given the user is viewing a list of events
When the user selects a different number of events to display
Then the app should update the event list to display the specified number of events

### FEATURE 4: Use the App When Offline

As a user,
I should be able to use the app when offline
So that I can access event information even without an internet connection.

#### 1. **SCENARIO 1: Show cached data when there’s no internet connection.**

Given the user has previously accessed the app and cached data is available
When the user opens the app without an internet connection
Then the app should display the previously cached data about events and their details

#### 2. **SCENARIO 2: Show error when user changes search settings (city, number of events).**

Given the user has made changes to the search settings (city, number of events)
When the user tries to apply the changes without an internet connection
Then the app should show an error message indicating that an internet connection is required to update the search settings

### FEATURE 5: Add an App Shortcut to the Home Screen

As a user,
I should be able to add an app shortcut to the home screen
So that I can quickly launch the app without searching for it in my app list.

#### 1. **SCENARIO 1: User can install the app as a shortcut on their device home screen.**

Given the user is using the app on their device
When the user accesses the app
Then the app should provide an option to add a shortcut to the device's home screen as a shortcut

### FEATURE 6: Display Charts Visualizing Event Details

As a user,
I should be able to view charts that visualize event details
So that I can understand and analyze event data more effectively.

#### 1. **SCENARIO 1: Show a chart with the number of upcoming events in each city.**

Given the user is viewing the list of events
When the app loads the data for upcoming events
Then the app should display a chart showing the number of upcoming events by city
