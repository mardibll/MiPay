import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/auth/login';
import Splash from '../pages/auth/splash';
import Signup from '../pages/auth/signup';
import TabNav from './tab.nav';
import Settings from '../pages/profile/settings';
import Recovery from '../pages/auth/recovery';
import ResetPass from '../pages/auth/resetPass';
import Transfer from '../pages/cards/transfer';

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
      <Stack.Screen name="Recovery" component={Recovery} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Transfer" component={Transfer} />

      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default AuthNav;
