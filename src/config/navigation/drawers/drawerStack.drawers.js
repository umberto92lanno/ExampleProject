import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../../../screens/Settings';

const Drawer = createDrawerNavigator();

export const DrawerStack = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Settings} />
    </Drawer.Navigator>
);
