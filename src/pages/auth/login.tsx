import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Inputs placeholder="Phone Number" />
      <Inputs placeholder="Password" secureText />

      <Buttons onPress={handleLogin} title="Login" />
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
});
