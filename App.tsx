import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './src/nav/auth.nav';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};

export default App;
