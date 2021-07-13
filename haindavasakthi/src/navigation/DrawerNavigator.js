import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import TabNavigator from "./TabNavigator"
import AboutScreen from '../screens/public/AboutScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={TabNavigator} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
