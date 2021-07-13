import React from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawerContent = props => {
    const { navigation } = props

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
                <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
