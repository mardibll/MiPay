import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {logos} from '../../assets/image';

type Props = {
  navigation: any;
};

const Splash: React.FC<Props> = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logoImage} source={logos} />
        <Text style={styles.logoText}>MiPay</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4263EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  logoText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '600',
    fontStyle: 'normal',
  },
});
