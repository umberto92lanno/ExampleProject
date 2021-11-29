/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/containers/App';
import AppFC from './src/containers/AppFC';
import {name as appName} from './app.json';

// sostituire App con AppFC per visualizzare screen Function Component
AppRegistry.registerComponent(appName, () => App);
