import React, { memo } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export const HomeRow = memo(({ onPress, image, name, gender }) => {
    const onPressLocal = () => {
        onPress(image, gender);
    }
    return (
        <View style={styles.rowContainer}>
            <TouchableOpacity onPress={onPressLocal}>
            <View
                style={styles.row}>
                <Image source={{uri: image}} style={styles.image} />
                <View style={styles.textContainer}>
                <Text>{name}</Text>
                </View>
            </View>
            </TouchableOpacity>
        </View>
    );
});

const shadows = {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    zIndex: 1000,
    elevation: 5,
  };
  
  const styles = StyleSheet.create({
    rowContainer: {
      height: 70,
      marginBottom: 10
    },
    row: {
      height: 70,
      flexDirection: 'row',
      backgroundColor: 'white',
      ...shadows,
    },
    textContainer: {
      paddingHorizontal: 16,
      justifyContent: 'center'
    },
    image: {
      width: 70,
      height: 70,
    },
  });
  