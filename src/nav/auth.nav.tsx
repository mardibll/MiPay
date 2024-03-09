import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/auth/login';
import Splash from '../pages/auth/splash';
import Signup from '../pages/auth/signup';
import TabNav from './tab.nav';

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

export default AuthNav;
