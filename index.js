/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/containers/App';
import AppFC from './src/containers/AppFC';
import {name as appName} from './app.json';
import Login from './src/containers/Login';
import List from './src/containers/List';

// sostituire App con AppFC per visualizzare screen Function Component
AppRegistry.registerComponent(appName, () => Login);
