import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home';
import Settings from '../../../screens/Settings';
import { MainStack } from '../stacks/main.stacks';
import { HomeStack } from '../stacks/home.stacks';
import { SettingsStack } from '../stacks/settings.stacks';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};
