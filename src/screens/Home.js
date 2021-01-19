import React, {useEffect, useState, useCallback} from 'react';
import { useMemo } from 'react';
import {View, FlatList, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { HomeRow } from '../components/HomeRow';


class CustomComponent extends React.PureComponent {
  constructor(props) {

  }

  render() {
    return (
      <View>
        <Text>{this.props.label}</Text>
      </View>
    );
  }
}

class CustomClass extends React.Component {
  constructor(props) {
    this.state = {
      color: 'red',
    };
    this._onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log('onPress');
  }

  render() {
    return (
      <View>
        <CustomComponent label={"Label"} onPress={onPress} />
      </View>
    );
  }
}


const Home = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [arrayList, setArrayList] = useState([]);
  const [extData, setExtData] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('componentDidMount');
    fetch('https://rickandmortyapi.com/api/character').then((res) => {
      res.json().then((r) => {
        setList(r.results);
        setArrayList(r.results);
    })});
    return () => {
      console.log('componentWillUnmount');
    }
  }, []);

  useEffect(() => {
    console.log('isFocused:', navigation.isFocused());
  }, [extData]);

  const onPress = useCallback((image, gender) => {
      navigation.navigate('UserDetails', { image, gender });
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

  const listMemo = useMemo(() => {
    if (value === '') {
      return list;
    }
    return list.filter(l => l.name.includes(value));
  }, [value, list]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={{ borderWidth: 1, width: '80%', borderRadius: 8, paddingHorizontal: 10 }}
          placeholder="Search"
          value={value}
          onChangeText={setValue}
        />
      </View>
      <View style={{ flex: 1, borderWidth: 1  }}>
        <FlatList
          data={listMemo}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={{ padding: 10, backgroundColor: 'blue' }}
          extraData={extData}
        />
      </View>
    </View>


  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});


{/*<SafeAreaView style={[styles.flex, { backgroundColor: 'black'}]}>
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
  </SafeAreaView>*/}