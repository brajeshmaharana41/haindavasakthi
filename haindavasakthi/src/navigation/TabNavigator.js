import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { DashboardStackNavigator, ProfileStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator
