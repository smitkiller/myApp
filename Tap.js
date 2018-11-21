// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './components/Home';
import SettingsScreen from './components/Settings';
import ReserveScreen from './components/Reserve';
import React, {Component} from 'react';

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Reserve:ReserveScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : ''}`;
        } else if (routeName === 'Reserve') {
          iconName = `ios-save${focused ? '' : ''}`;
        }
        else if (routeName === 'Settings') {
          iconName = `ios-settings${focused ? '' : ''}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'gray',
     //   style: {
      //  backgroundColor: '#42a5f5',
     // }
    },
  }
);