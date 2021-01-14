import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { HomeRow } from '../components/HomeRow';

const Home = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [extData, setExtData] = useState(false);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character').then((res) => {
      res.json().then((r) => setList(r.results));
    });
    
  }, []);

  useEffect(() => {
    console.log('isFocused:', navigation.isFocused());
  }, [extData]);

  const onPress = useCallback((image, gender) => {
    navigation.navigate('UserDetails', { image, gender });
    setExtData(!extData);
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <HomeRow
        image={item.image}
        name={item.name}
        gender={item.gender}
        onPress={onPress}
      />
    );
  }, []);

  const keyExtractor = useCallback((item, index) => {
    return item.id.toString();
  }, []);

  const getItemLayout = useCallback((data, index) => ({ length: 70, offset: 70 * index, index }), []);

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.flex}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          contentContainerStyle={{paddingHorizontal: 16}}
          extraData={extData}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
