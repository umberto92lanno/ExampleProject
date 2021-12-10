import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from "./src/containers/List";
import Login from "./src/containers/Login";
import AppFC from "./src/containers/AppFC";

export default function App() {
  return (
    <List />
    // <Login />
    // <AppFC />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
