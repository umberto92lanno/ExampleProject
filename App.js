// SOLO TEST



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Button, TouchableWithoutFeedback, Image, ScrollView,TextInput, FlatList} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: false,
//       isError: false,
//       value: 0,
//     };
//     this.onPressText = this.onPressText.bind(this);
//   }

//   onPress() {
//     setInterval(() => {
//       this.setState({value: this.state.value + 1});
//     }, 200);
//   }

//   onPressText() {
//     console.warn('press text');
//   }

//   componentDidCatch(error, info) {
//     this.setState({isError: true});
//   }

//   render() {
//     const {isActive, isError} = this.state;
//     return (
//       <>
//         <View style={styles.container}>
//           <Button onPress={() => this.onPress()} isActiveProps={isActive} />
//           <SecondComponent onPress={this.onPressText} />
//         </View>
//       </>
//     );
//   }
// }

// class Button extends React.Component {
//   static getDerivedStateFromProps(props, state) {
//     if (props.isActiveProps !== state.isActive && !state.isUpdate) {
//       return {isActive: props.isActiveProps, isUpdate: false};
//     }
//   }

//   constructor(props) {
//     super(props);
//     console.warn('constructor');
//     this.state = {
//       isActive: false,
//       isUpdate: false,
//     };
//   }
//   componentDidMount() {
//     console.warn('didMount');
//   }

//   componentDidUpdate(prevProps, prevState) {}

//   onPressLocal() {
//     this.setState({isActive: true, isUpdate: true});
//     const {onPress} = this.props;
//     onPress();
//   }

//   render() {
//     console.log('render button');
//     const {isActive} = this.state;
//     return (
//       <TouchableOpacity onPress={() => this.onPressLocal()} activeOpacity={0.9}>
//         {!isActive ? (
//           <View style={styles.button} />
//         ) : (
//           <View style={styles.buttonRed} />
//         )}
//       </TouchableOpacity>
//     );
//   }
// }

// export class SecondComponent extends React.PureComponent {
//   render() {
//     console.log('render second component');
//     return (
//       <View>
//         <Text onPress={() => this.props.onPress()}>PureComponent</Text>
//       </View>
//     );
//   }
// }

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  // esempio fetch

  useEffect(() => {
    fetch('chiamata_api').then(result_fetch => {
      result_fetch.json().then(risultati_api => {
        console.log(risultati_api);
        setData(risultati_api.results);
      })
    });
  }, []);


  useEffect(() => {
    console.log('DidMount');
    return () => {
      console.log('willUnmount');
    }
  }, []);

  useEffect(() => {
    console.warn(text);
  }, [text]);

  const onPress = useCallback(() => {
    console.log('second Component pressed');
  }, []);

  const renderItem = useCallback(({ item, index }) => {
    return (
      <View style={{ height: 40, width: 100 }}>
        <Text>{item}</Text>
      </View>
    );
  }, []);

  const keyExtractor = useCallback((item, index) => `nomeComponente_${index}`, []);

  const componentSeparator = useCallback(() => <View style={{ borderWidth: 1 }} />, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={[1,2,3,4,5,6,7,8,9,0]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={componentSeparator}
      />
      {/* <ScrollView contentContainerStyle={{}}>
        {[1,2,3,4,5,6,7,8,9,9].map(e => (
          <View style={{ borderWidth: 1, height: 40, width: 100 }}></View>
        ))}
        </ScrollView> */}
      {/* <Text style={styles.text}>Ciao</Text>
      <TouchableWithoutFeedback>
        <View style={{ width: 30, height: 30, backgroundColor: 'yellow' }}>

        </View>
      </TouchableWithoutFeedback>
        <Button title="TEXT" />
        <TextInput style={styles.textInput} value={text} onChangeText={setText} underlineColorAndroid="trasparent" />
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyOwCO8tx-7nobS9KqLweEFeWcA31el6P0w&usqp=CAU' }} style={styles.image}/>
      </ScrollView> */}
    </View>
  );
};

const SecondComponent = React.memo(({ onPress }) => {
  return (
      <View>
        <Text onPress={onPress}>PureComponent</Text>
      </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'red',
  },
  image: {
    width: 300,
    height: 300,
  },
  textInput: {
    height: 80,
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {backgroundColor: 'blue', height: 50, width: 100},
  buttonRed: {backgroundColor: 'red', height: 50, width: 100},
});

export default App;
