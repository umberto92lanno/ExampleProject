/* eslint-disable no-undef */
import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './config/navigation/stacks/main.stacks';
import { MainTabs } from './config/navigation/tabs/main.tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const AppReal = () => {
// const [array, setArray] = useState([]);
//
//
//
//   const funzione = useCallback(() => {
//     if (array.length) {
//       console.log('Non ci sono elementi');
//     } else {
//       console.log(array);
//     }
//   }, [array]);
//
//   funzione();
//
//   return (
//         <NavigationContainer>
//             <MainStack />
//         </NavigationContainer>
//     );
// };
//
// export default AppReal;

const Screen1 = ({ navigation }) => {
  const onPressScreen1 = () => {
    navigation.navigate('Screen2');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
      <TouchableOpacity onPress={onPressScreen1}>
        <Text>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen2 = ({ navigation }) => {
  const onPressScreen2 = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 2</Text>
      <TouchableOpacity onPress={onPressScreen2}>
        <Text>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen3 = ({ navigation }) => {
  const onPressScreen3 = () => {
    navigation.navigate('Screen4');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 3</Text>
      <TouchableOpacity onPress={onPressScreen3}>
        <Text>Go to Screen4</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen4 = ({ navigation }) => {
  const onPressScreen4 = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 4</Text>
      <TouchableOpacity onPress={onPressScreen4}>
        <Text>Go to Screen3</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const FirstTabStackComponent = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    );
  };

  const SecondTabStackComponent = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    );
  };

  const TabComponent = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={FirstTabStackComponent} />
        <Tab.Screen name="Tab2" component={SecondTabStackComponent} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabComponent />
    </NavigationContainer>
  );
};

export default App;
