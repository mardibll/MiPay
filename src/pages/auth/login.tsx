import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Buttons, Inputs} from '../../components';

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Login: React.FC<Props> = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('TabNav');
  };
  const handleRegist = () => {
    navigation.navigate('Signup');
  };
  const handleRecovery = () => {
    navigation.navigate('Recovery');
  };

  return (
    <View style={styles.container}>
      <View style={{padding: 20, paddingTop: 80}}>
        <Text style={styles.Text24}>Hi, Welcome Back! </Text>
        <Text style={styles.text16}>Sign in to your account.</Text>
      </View>
      <Inputs placeholder="Phone Number" />
      <Inputs placeholder="Password" secureText />
      <Text style={styles.forgotPass} onPress={handleRecovery}>
        Forgot Password?
      </Text>
      <Buttons onPress={handleLogin} title="Login" />
      <Text
        style={[styles.text16, {textAlign: 'center', paddingHorizontal: 20}]}>
        Don’t have account?{' '}
        <Text
          style={{fontWeight: 'bold', color: '#4263EB'}}
          onPress={handleRegist}>
          Sign Up
        </Text>
      </Text>
      <Buttons
        icon
        bordered
        bg="transparent"
        onPress={handleLogin}
        title="Login with Google"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text16: {
    color: '#A2A0A8',
    fontSize: 16,
  },
  Text24: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  forgotPass: {
    color: '#4263EB',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingHorizontal: 20,
  },
});
