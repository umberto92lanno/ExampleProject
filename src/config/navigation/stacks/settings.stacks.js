import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/Home';
import UserDetails from '../../../screens/UserDetails';
import Settings from '../../../screens/Settings';
import { DrawerStack } from '../drawers/drawerStack.drawers';

const Stack = createStackNavigator();

export const SettingsStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Settings" component={DrawerStack} options={{ headerShown: false }} />
    </Stack.Navigator>
);
