import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icOut, icTrxDefault} from '../../assets/image';

type Props = {
  onPress: () => void;
};

const ItemHistoryTransaction = (props: Props) => {
  const {onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.items}>
      <View style={[styles.row]}>
        <Image style={styles.logotransaction} source={icTrxDefault} />
        <View>
          <Text style={styles.title}>Apple Store</Text>
          <View style={[styles.row, styles.mt]}>
            <Image style={styles.iconStatus} source={icOut} />
            <Text style={styles.timer}>Iphone 12 Case</Text>
          </View>
        </View>
      </View>
      <View style={styles.flexEnd}>
        <View style={[styles.row, styles.mb]}>
          <Text style={styles.title}>-</Text>
          <Text style={styles.title}>Rp150.000</Text>
        </View>
        <Text style={styles.timer}>09:39 AM</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemHistoryTransaction;

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 5,
  },
  title: {
    color: '#15141F',
    fontSize: 14,
    fontWeight: 'bold',
  },

  timer: {
    color: '#A2A0A8',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logotransaction: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
  iconStatus: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
  flexEnd: {alignItems: 'flex-end'},
  mt: {marginTop: 5},
  mb: {marginBottom: 5},
});
