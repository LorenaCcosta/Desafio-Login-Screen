import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoginScreen from './src/screens/LoginScreen';
import AcessarScreen from './src/screens/AcessarScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}} edges={['top', 'right', 'left','bottom']}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>

          <Stack.Screen name="Acessar" component={AcessarScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}