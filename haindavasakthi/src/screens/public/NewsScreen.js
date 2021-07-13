import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/UIComponents/Header'

const NewsScreen = props => {
    const { navigation } = props

    return (
        <View>
            <Header navigation={navigation} />
            <Text>News Screen</Text>
        </View>
    )
}

export default NewsScreen
