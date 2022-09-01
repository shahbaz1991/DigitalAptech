//importing method from library
import AsyncStorage from '@react-native-community/async-storage';

//method to store data to local storage
export const storeData = async (key,value) => {
    try {
        await AsyncStorage.setItem(key, value)
        return true
    } catch (e) {
        return false
    }
}

//method to retrive data from local storage
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value != null){ 
            return value
        } else {
            return null
        }
    } catch(e) {
      return null
    }
}

//method to clear data from local storage
export const clearData = async () => {
    try {
      await AsyncStorage.clear()
      return true
    } catch(e) {
      return false
    }
}
  