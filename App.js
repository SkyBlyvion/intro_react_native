import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Account from './src/screens/Account';
import Home from './src/screens/Home';
import Note from './src/screens/Note';
import MyTabBar from './src/components/MyTabBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabBar />
    </NavigationContainer>
  );
}
