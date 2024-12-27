```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      return null; // Handle missing data
    }
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null; // Handle error appropriately
  }
};

const performMultipleOperations = async () => {
  await storeData('key1', 'value1');
  const value = await getData('key1');
  console.log('Value from key1:', value)
  await AsyncStorage.removeItem('key1');
}

performMultipleOperations();
```