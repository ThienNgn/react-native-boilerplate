// @flow
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { COLORS } from '../styles';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

const AppNavigator = createStackNavigator(
  {
    Home: TabNavigator,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS.sky,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
