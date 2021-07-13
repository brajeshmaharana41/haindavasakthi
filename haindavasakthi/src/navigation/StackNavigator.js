import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import DashboardScreen from '../screens/private/Dashboard/DashboardScreen';
import ProfileScreen from '../screens/private/Profile/Profile';

const Stack = createStackNavigator()

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const DashboardStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
    );
}

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export { DashboardStackNavigator, ProfileStackNavigator };
