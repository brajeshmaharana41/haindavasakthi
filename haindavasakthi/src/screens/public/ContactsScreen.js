import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/UIComponents/Header'

const ContactsScreen = props => {
    const { navigation } = props

    return (
        <View>
            <Header navigation={navigation} />
            <Text>Contact's Screen</Text>
        </View>
    )
}

export default ContactsScreen
