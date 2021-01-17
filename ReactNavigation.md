### React Navigation

##### React Navigation è una libreria esterna che permette di creare pagine di navigazione in React Native.

## *Link utili e librerie da installare*<br/>
Link doc: https://reactnavigation.org/docs/getting-started/
## *Comandi installazione librerie*<br/>
##### NPM
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native
```
##### YARN
```
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native
```

## *Primi passi*<br/>
##### La prima cosa da fare sarà creare gli stack scelti per la navigazione.<br />Gli stack più importanti sono:
1. StackNavigator
1. BottomTabNavigator
1. DrawerNavigator

##### Creazione di un singolo stack in single page su App.js (punto d'ingresso dell'app React Native):
```
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

const App = () => {

  const Stack = createStackNavigator();

  const StackComponent = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StackComponent />
    </NavigationContainer>
  );
};

export default App;
```
##### Passaggio parametri da una pagina ad un'altra<br/>
###### Pagina di partenza:
```
const goToNextPage = () => {
    navigation.navigate('Screen2', { title: 'Titolo seconda pagina' });
};
```
###### Pagina di destinazione:
```
const Screen2 = ({ navigation, route }) => {
    const { title } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{title}</Text>
        </View>
    )
};
```
