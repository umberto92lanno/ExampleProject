### React Native

##### React Native è un framework che utilizza React per creare app compatibili iOS & Android con il medesimo codice.

## *Installazione librerie e init progetto:*
###### Utilizzare guida "React Native CLI Quickstart"
https://reactnative.dev/docs/environment-setup
###### Init progetto:
```
npx react-native init <titolo_progetto>
```
###### Run progetto:
###### iOS
```
npx react-native run-ios
```
###### Android
```
npx react-native run-android
```
## *Struttura cartelle*<br/>
```
--- ios // cartella contenente tutti i file del progetto per iOS
--- android // cartella contenente tutti i file del progetto per Android
--- index.js // primo file letto dai rispettivi progetti android e ios
--- package.json // file dove si trovano gli script e le librerie necessarie al funzionamento del progetto
--- App.js // è il primo file dove viene effettivamente fisualizzata la screen sul dispositivo
```
## *index.js*<br/>
##### Nel codice viene indicato il componente di riferimento da mostrare all'apertura dell'app
```
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/*
- AppRegistry è la classe che si occupa di inizializzare l'app React Native.
- registerComponent è la funzione che viene lanciata e al suo interno abbiamo 2 importanti infomazioni:
    - Il nome dell'applicazione (primo parametro)
    - Callback che ritorna il componente relativo alla prima schermata visualizzata dal framework.
Nel nostro caso la prima schermata che verrà visualizzata sarà App (secondo parametro)
(è possibile trovare riferimenti alla schermata dalla riga: "import App from './App'")
*/

AppRegistry.registerComponent(appName, () => App);
```

## *Lifecycle* (ordinati)
###### constructor<br/>
Primo metodo chiamato una volta istanziata la classe, ancora prima di eseguire il DOM.
Nel constructor vengono definite le variabili utili all'avvio del componente, viene usato soprattutto per l'inizializzazione dei vari state.
###### render
Contiene il JSX che genera il DOM.
###### componentDidMount<br/>
Viene eseguito dopo il primo render().
###### componentWillUnmount<br/>
Viene eseguito quando il componente viene dismesso.
