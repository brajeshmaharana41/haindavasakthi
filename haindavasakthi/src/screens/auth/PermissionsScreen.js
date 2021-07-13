import React, { useEffect, useState } from 'react'
import { View, Text, PermissionsAndroid, Button, Platform, Alert } from 'react-native'
// import Permissions from 'react-native-permissions'
// import { request, PERMISSIONS } from 'react-native-permissions'
import { checkPermission, PERMISSION_TYPE } from '../../components/AppPermissions'
import styles from '../../theme/Styles'

async function request_location_runtime_permission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'ReactNativeCode Location Permission',
                'message': 'ReactNativeCode App needs access to your location '
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            alert("Location Permission Granted.")
        }
        else {
            alert("Location Permission Not Granted")
        }
    } catch (err) {
        console.warn(err)
    }
}

async function goToQr() {
    // android 6.0 + 
    if ( Platform.OS === 'android' && Platform.Version >= 23) {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
          'title': 'We want use your camara',
          'message': 'reason of access '
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //  goToCameraScreen(); // make camera open
        console.log("goToQr GRANTED")
        } else {
          Alert.alert(
             "can't access to camera title",
             "can't access to camera message",
                  [
                  {text: "ok" }
                  ]
          );
        }
      } catch (err) {
        //catch error here
      }
    } else {
     goToCameraScreen(); // make camera open
    }
  };

const PermissionsScreen = () => {
    useEffect(async () => {
        checkPermission(PERMISSION_TYPE.microphone)
        return () => {
            console.log("cleanup")
        }
    }, [])

    return (
        <View style={[styles.flex1, styles.vhCenter]}>
            <Text>Permission's Screen</Text>
            <Button title="request location permissions" onPress={() => goToQr()} />
        </View>
    )
}

export default PermissionsScreen
