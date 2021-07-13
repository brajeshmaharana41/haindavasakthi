import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/UIComponents/Header'

const DonationsScreen = props => {
    const { navigation } = props

    return (
        <View>
            <Header navigation={navigation} />
            <Text>Donation's Screen</Text>
        </View>
    )
}

export default DonationsScreen
