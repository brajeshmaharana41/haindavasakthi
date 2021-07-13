import AsyncStorage from '@react-native-async-storage/async-storage'

// Email validator
export const validateEmail = email => {
    // const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/
    return emailRegex.test(email)
}

// Get user data - Localstorage
export const getUserData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('userData')
        const data = jsonValue != null ? JSON.parse(jsonValue) : {}
        console.log("utils getUserData: " + JSON.stringify(data))
        return data
    } catch (error) {
        console.log("utils getUserData error: " + error)
    }
}

