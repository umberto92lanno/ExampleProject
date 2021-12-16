import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from '../containers/List';
import { Detail } from '../containers/Detail';

export const MainScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}