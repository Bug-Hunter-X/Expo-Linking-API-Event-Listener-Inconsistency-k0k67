The issue lies in the reliability of the `Linking.addEventListener` within Expo's Linking API. To work around this limitation, we can use a combination of `Linking.getInitialURL` and AsyncStorage to ensure deep link handling across different states of the application:

```javascript
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ... other imports

useEffect(() => {
  const handleInitialUrl = async () => {
    let initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      // Process initial URL
      console.log('Initial URL from getInitialURL:', initialUrl);
      // Store initial URL in AsyncStorage
      await AsyncStorage.setItem('initialUrl', initialUrl);
    }
  };

  handleInitialUrl();
}, []);

useEffect(() => {
  const linkSubscription = Linking.addEventListener('url', (event) => {
    // Process the event
    console.log('URL from addEventListener:', event.url);
  });

  return () => {
    linkSubscription.remove();
  };
}, []);

// ... rest of your component
```

This approach ensures that deep links are handled whether they are received while the app is running in the foreground, in the background, or when it's initially launched via a deep link.