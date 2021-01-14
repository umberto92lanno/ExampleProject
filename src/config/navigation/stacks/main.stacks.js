import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import UserDetails from '../../../screens/UserDetails';
import { MainTabs } from '../tabs/main.tabs';

const Stack = createStackNavigator();

export const MainStack = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Cerca" component={() => <View />} />
    </Stack.Navigator>
);
