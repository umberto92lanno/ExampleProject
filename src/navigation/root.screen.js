import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Detail } from '../containers/Detail';

import { TabsScreen } from './tabs.screen';

export const RootScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabsScreen} />
      <Stack.Screen options={{ presentation: 'card' }} name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};