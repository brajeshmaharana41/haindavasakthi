import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/UIComponents/Header'

const ShopScreen = props => {
    const { navigation } = props

    return (
        <View>
            <Header navigation={navigation} />
            <Text>Shop Screen</Text>
        </View>
    )
}

export default ShopScreen
