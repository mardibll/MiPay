import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {logos} from '../../assets/image';

type Props = {};

const MipayCard = (props: Props) => {
  return (
    <View style={styles.mipaycard}>
      <View style={styles.head}>
        <Image style={styles.logo} source={logos} />
        <Text style={styles.title}>MiPay Card</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.amount}>Rp500.000</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.numbers}>... 5318</Text>
      </View>
    </View>
  );
};

export default MipayCard;

const styles = StyleSheet.create({
  mipaycard: {
    backgroundColor: '#173EDD',
    padding: 20,
    borderRadius: 15,
  },
  head: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginVertical: 12,
  },
  logo: {height: 20, width: 20, marginRight: 8},
  title: {color: '#FFF', fontSize: 18, fontWeight: '700'},
  amount: {color: '#FFF', fontSize: 24, fontWeight: '700'},
  numbers: {color: '#FFF', fontSize: 16, fontWeight: '500'},
});
