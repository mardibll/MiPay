import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Inputs} from '../../components';

type Props = {
  navigation: {
    navigate: (sreen: string) => void;
  };
};

const ResetPass: React.FC<Props> = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('TabNav');
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', paddingTop: 120}}>
        <Text style={styles.Text24}>Reset your password</Text>
        <Text style={[styles.text16, {width: '60%', textAlign: 'center'}]}>
          At least 8 characters, with uppercase and lowercase letters
        </Text>
      </View>
      <Inputs placeholder="New Password" secureText showSecureText />
      <Inputs placeholder="Confirm Password" secureText />
      <Buttons title="Sign In" onPress={handleSubmit} />
    </View>
  );
};

export default ResetPass;

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
});
