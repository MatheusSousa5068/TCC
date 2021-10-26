import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


import Login from './src/screens/login';
import Home from './src/screens/home';
import Signup from './src/screens/signup';
import Order from './src/screens/order';

import Worker from './src/screens/worker';
import WorkerPed from './src/screens/workerPed';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Worker" component={Worker} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="WorkerPed" component={WorkerPed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
