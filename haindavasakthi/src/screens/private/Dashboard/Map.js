import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, PermissionsAndroid } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import Permissions from 'react-native-permissions'
import MapStyles from '../../../utils/MapStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../theme/Theme'
import styles from '../../../theme/Styles'

const ASPECT_RATIO = WINDOW_WIDTH / WINDOW_HEIGHT
const latitudeDelta = 0.0925 // if it is increases map zoom level will dicrease
const longitudeDelta = latitudeDelta * ASPECT_RATIO

// 0.025

// const latitudeDelta = 0.01
// const longitudeDelta = 0.01

const Map = () => {
    const initialMarkers = [{
        title: 'Location 1',
        coordinates: {
          latitude: 17.385044,
          longitude: 78.486671,
          latitudeDelta,
          longitudeDelta
        },
      },{
        title: 'Location 2',
        coordinates: {
          latitude: 17.377836,
          longitude: 78.489313,
          latitudeDelta,
          longitudeDelta
        },
      },{
        title: 'Location 3',
        coordinates: {
          latitude: 17.388648,
          longitude: 78.474540,
          latitudeDelta,
          longitudeDelta
        },
      },{
        title: 'Location 4',
        coordinates: {
          latitude: 17.400442,
          longitude: 78.503398,
          latitudeDelta,
          longitudeDelta
        },
      },
      {
        title: 'Location 5',
        coordinates: {
          latitude: 17.384388,
          longitude: 78.493435,
          latitudeDelta,
          longitudeDelta
        },  
      }]
    const [currentLocation, setCurrentLocation] = useState(null)
    const [markers, setMarkers] = useState(initialMarkers)
    const [origin, setOrigin] = useState({
        latitude: 17.3850,
        longitude: 78.4867,
        latitudeDelta,
        longitudeDelta,
    })

    useEffect(() => {
        // getCurrentLocation()
    }, [])

    const getCurrentLocation = async () => {
        Geolocation.getCurrentPosition(
            position => {
                setCurrentLocation(position)
                setOrigin({ ...origin, latitude: position.coords.latitude, langitude: position.coords.longitude })
                console.log("getCurrentPosition: " + JSON.stringify(position))
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        )
    }


    const onRegionChange = (region) => {
        setOrigin(region)
        console.log("Coordinates: " + JSON.stringify(region))
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            // region={origin}
            region={markers[0].coordinates}
            zoomEnabled={true}
            // onRegionChange={region => onRegionChange(region)}
            customMapStyle={MapStyles}
            loadingEnabled={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsBuildings={false}
            minZoomLevel={9}
            maxZoomLevel={17}
        >
            {markers.map(marker => {
                return <Marker
                    key={marker.title}
                    coordinate={marker.coordinates}
                    title={marker.title}
                    // description="Hyderabad Location"
                    image={require('../../../assets/map-pin.png')}
                />
            })}

        </MapView>
    )
}

export default Map