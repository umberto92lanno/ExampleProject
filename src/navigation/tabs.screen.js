import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from './main.screen';

const Tab = createBottomTabNavigator();

export const TabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Impostazioni" component={() => <View />} />
    </Tab.Navigator>
  );
}