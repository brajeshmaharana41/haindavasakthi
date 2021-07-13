import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/UIComponents/Header'

const VideosScreen = props => {
    const { navigation } = props

    return (
        <View>
            <Header navigation={navigation} />
            <Text>Video's Screen</Text>
        </View>
    )
}

export default VideosScreen
