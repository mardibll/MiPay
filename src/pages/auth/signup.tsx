import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Inputs} from '../../components';

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Signup: React.FC<Props> = ({navigation}) => {
  const handleSingUp = () => {
    navigation.navigate('TabNav');
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={{padding: 20, paddingTop: 60}}>
        <Text style={styles.Text24}>Getting Started</Text>
        <Text style={styles.text16}>Create an account to continue!</Text>
      </View>
      <Inputs placeholder="Full Name" />
      <Inputs placeholder="Phone Number" />
      <Inputs placeholder="Password" secureText />
      <Buttons title="Sign Up" onPress={handleSingUp} />
      <Text style={[styles.text16, {textAlign: 'center'}]}>
        Already have an account?{' '}
        <Text
          style={{color: '#4263EB', fontWeight: 'bold'}}
          onPress={handleLogin}>
          Login
        </Text>
      </Text>
      <Buttons
        icon
        bordered
        bg="transparent"
        onPress={handleSingUp}
        title="Login with Google"
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
});
