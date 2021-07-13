import React from 'react'
import { View, Text, Platform } from 'react-native'
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'

const PLATFORM_MICROPHONE_PERMISSIONS = {
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
}

const REQUEST_PERMISSION_TYPE = {
    microphone: PLATFORM_MICROPHONE_PERMISSIONS
}

const PERMISSION_TYPE = {
    microphone: 'microphone'
}

const checkPermission = async (type) => {
    console.log("Calling")
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]

    if (!permissions) return true

    try {
        const result = await check(permissions)

        if (result === RESULTS.GRANTED) {
            console.log("GRANTED")
            return true
        }
        return requestPermission(permissions)// requesst permission
    } catch (err) {
        return false
    }
}

const requestPermission = async (permissions) => {
    try {
        const result = await request(permissions)
        return result === RESULTS.GRANTED
    } catch (err) {
        return false
    }
}

// const Permission = new AppPermissions()
export { checkPermission, PERMISSION_TYPE }
