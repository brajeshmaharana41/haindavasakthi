import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/UIComponents/Header'

const DepartmentsScreen = props => {
    const { navigation } = props

    return (
        <View>
            <Header navigation={navigation} />
            <Text>Departments Screen</Text>
        </View>
    )
}

export default DepartmentsScreen
