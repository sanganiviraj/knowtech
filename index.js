/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Mainapp from './Src/Navigations/Home';
import Home from './Src/Navigations/Home';
import popularscreen from './Src/extrascreens/Popularscreen';

AppRegistry.registerComponent(appName, () => Home);
