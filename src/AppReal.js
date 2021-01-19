import React, {useCallback, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStack} from './config/navigation/stacks/main.stacks';
import Home from './screens/Home';
import UserDetails from './screens/UserDetails';


const StackNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserDetails" component={UserDetails} options={{ headerStyle: { backgroundColor: 'blue' } }} />
    </Stack.Navigator>
  );
}



const AppReal = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default AppReal;
