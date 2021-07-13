import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/UIComponents/Header'

const AboutScreen = props => {
    const { navigation } = props

    return (
        <View>
            <Header navigation={navigation} />
            <Text>About Screen</Text>
        </View>
    )
}

export default AboutScreen
