import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import {TextInput} from "react-native-web";

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [extraData, setExtraData] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const characters = await result.json();
      return characters.results;
    }

    getCharacters().then(setCharacters);
    // fetch('https://rickandmortyapi.com/api/character').then(result => {
    //   result.json().then(characters => {
    //     console.log(characters.results);
    //   });
    // });
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  const renderItem = useCallback(({ item }) => {
    return (
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text>{item.name}</Text>
        </View>
    );
  }, []);

  const filteredCharacters = useMemo(() => {
    if (!searchText) {
      return characters;
    }
    return characters.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()));
  }, [characters, searchText])



  const keyExtractor = useCallback((item, index) => {
    return `${item.id}`;
  }, []);

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{ height: 16 }} />
  }, []);

  return (
      <>
        <TextInput onChangeText={setSearchText} />
        <FlatList
            data={filteredCharacters}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            extraData={extraData}

            contentContainerStyle={styles.flatListContainer}
            ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
    marginRight: 20,
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
});

export default List;
