import { thisExpression } from '@babel/types';
import React, { Component} from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { ButtonComponentFC } from '../components/ButtonComponentFC';


class App extends Component {
  // 1
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      label: 'CIAO',
      count: 1,
    }
  }
  // 3
  componentDidMount() {
    setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, 2000);
  }
  // 4
  componentDidUpdate() {
  }
  // 5
  componentWillUmount() {
    console.log('componentWillUnmount');
  }

  onPress = () => {
    // this.setState((prevState) => {
    //   console.warn(prevState);
    //   return { label: 'ARRIVEDERCI' };
    // });
    this.setState({ label: 'ARRIVEDERCI' });
  }

  // 2
  render() {
    return (
      <>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>{this.state.count}</Text>
        <ButtonComponentFC label={this.state.label} onPress={this.onPress} />
      </View>
      </>
    )
  }
}

export default App;