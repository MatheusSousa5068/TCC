import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Login from './src/screens/login';
import Home from './src/screens/home';
import Signup from './src/screens/signup';
import Order from './src/screens/order';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Home />
    </>
  );
}
