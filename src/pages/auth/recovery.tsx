import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Inputs} from '../../components';

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Recovery: React.FC<Props> = ({navigation}) => {
  const handleBtn = () => {
    navigation.navigate('ResetPass');
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', paddingTop: 120}}>
        <Text style={styles.Text24}>Password Recovery</Text>
        <Text style={[styles.text16, {width: '80%', textAlign: 'center'}]}>
          Enter your Phone number to recover your password
        </Text>
      </View>
      <Inputs placeholder="Phone Number" />
      <Buttons title="Continue" onPress={handleBtn} />
    </View>
  );
};

export default Recovery;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
