import React from 'react';
import {StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({});
