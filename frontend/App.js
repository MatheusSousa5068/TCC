import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

import Sign from './src/screens/client/signup'
import Login from './src/screens/client/login';
import Home from './src/screens/client/home';
import Order from './src/screens/client/order';

import Worker from './src/screens/server/worker';
import WorkerPed from './src/screens/server/workerPed';
import LoginWorker from './src/screens/server/loginWorker';

//import Sign from './src/screens/client/sign'


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
        <Stack.Screen name="Signup" component={Sign} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="WorkerPed" component={WorkerPed} />
        <Stack.Screen name="LoginWorker" component={LoginWorker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
