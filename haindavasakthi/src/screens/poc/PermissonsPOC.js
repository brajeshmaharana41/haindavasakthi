import React, { useEffect } from "react"
import { Button, PermissionsAndroid, TouchableOpacity, StatusBar, StyleSheet, Text, View } from "react-native"
// import ImagePicker from 'react-native-image-picker'
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import * as ImagePicker from "react-native-image-picker"

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

const PermissonsPOC = () => {
  const options = {
    title: 'Load Photo',
    customButtons: [
      { name: 'button_id_1', title: 'CustomButton 1' },
      { name: 'button_id_2', title: 'CustomButton 2' }
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

  const openCamera = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        console.log(response);
        // this.setState({resourcePath: response});
      },
    )
  }

  const openPicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 200,
      maxWidth: 200,
    }
    ImagePicker.launchCamera(options, (response) => { // Use launchImageLibrary to open image gallery
      // console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.base64 }

        console.log(source)
      }
    })
  }

    const permission = () => {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("granted")
      } else {
        console.log("denied")
      }
    }

    useEffect(() => {
      // permission()
    }, [])

    return (
      <View style={styles.container}>
        <Text style={styles.item}>Try permissions</Text>
        <TouchableOpacity onPress={() => requestCameraPermission()}>
          <Text>request camera permissions</Text>
        </TouchableOpacity>
        {/* <Button title="request camera permissions" onPress={() => requestCameraPermission()} /> */}
        <Button title="Image Picker" onPress={() => openPicker()} />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    }
  });

  export default PermissonsPOC