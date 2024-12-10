# Expo Linking API Event Listener Inconsistency

This repository demonstrates a bug in the Expo Linking API where the `Linking.addEventListener` sometimes fails to trigger when the app is in the background or opened via a Universal Link on iOS.  The app successfully receives the deep link, but the event listener remains inactive. 

The `linkingBug.js` file showcases the problematic behavior.  The `linkingSolution.js` file provides a potential workaround using a combination of `Linking.getInitialURL` and persistent storage to ensure deep links are handled regardless of app state.

## Bug Reproduction

1. Clone the repository.
2. Run the app using Expo Go.
3. Send a deep link to the app while it's in the background or initially open it with a Universal Link. 
4. Observe that the console log from `Linking.addEventListener` does not always execute.

## Solution

The provided solution addresses this inconsistency by utilizing `Linking.getInitialURL` to retrieve the initial deep link when the app starts and using AsyncStorage to persistently save the deep link, thus ensuring it's handled.