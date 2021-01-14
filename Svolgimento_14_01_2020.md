### Continuare l'app aggiungendo:

1. Tab Navigation composta da:
	1. Un tab con la lista dei personaggi
	1. Un tab con lista degli episodi

1. Ogni tab dovrà avere un ulteriore stack (StackNavigator) di navigazione composto da due schermate
	1. Lista episodi
	1. Dettaglio episodio selezionato dalla lista



## *Librerie necessarie*:<br />
*comando npm:*
```
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native @react-navigation/bottom-tabs
```

*comando yarn:*
```
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native @react-navigation/bottom-tabs
```

*iOS:*
```
cd ios
pod install
cd ..
```

### *Link*:

*React Navigation*<br />
https://reactnavigation.org/docs/stack-navigator<br />
https://reactnavigation.org/docs/bottom-tab-navigator


### *API*:

#### *Chiamata lista tutti i personaggi:*<br />
*Link doc:* https://rickandmortyapi.com/documentation/#get-all-characters
```
GET https://rickandmortyapi.com/api/character
```
#### *Chiamata lista tutti gli episodi:*<br />
*Link doc:* https://rickandmortyapi.com/documentation/#get-all-episodes
```
GET https://rickandmortyapi.com/api/episode
```
