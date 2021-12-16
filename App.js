import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from "./src/containers/List";
import Login from "./src/containers/Login";
import AppFC from "./src/containers/AppFC";
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from './src/navigation/main.screen';
import { TabsScreen } from './src/navigation/tabs.screen';
import { RootScreen } from './src/navigation/root.screen';
import { DrawerScreen } from './src/navigation/drawer.screen';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})