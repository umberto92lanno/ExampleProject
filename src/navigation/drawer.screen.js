import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootScreen } from './root.screen';

const Drawer = createDrawerNavigator();

export const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={RootScreen} />
    </Drawer.Navigator>
  );
}