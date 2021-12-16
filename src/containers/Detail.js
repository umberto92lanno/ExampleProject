import React from 'react';
import { View, Image, Text, Button } from 'react-native';

export const Detail = ({ navigation, route }) => {
  const { name, uri } = route.params;

  return (
    <View style={{ flex: 1, paddingVertical: 40 }}>
      <Button title="Indietro" onPress={() => navigation.popToTop()} />
      <Image source={{ uri }} style={{ width: 100, height: 100 }} />
      <Text>{name}</Text>
    </View>
  )
};
