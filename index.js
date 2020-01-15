import { AppRegistry, Platform } from 'react-native';
import App from './src/navigations/index';

AppRegistry.registerComponent('CodeShop', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('CodeShop', { rootTag });
}
