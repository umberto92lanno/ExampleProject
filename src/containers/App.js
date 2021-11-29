import { thisExpression } from '@babel/types';
import React, { Component} from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { ButtonComponent } from './src/components/ButtonComponent';
import { ButtonComponentFC } from './src/components/ButtonComponentFC';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      label: 'CIAO',
      count: 1,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, 2000);
  }

  componentDidUpdate() {
  }

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