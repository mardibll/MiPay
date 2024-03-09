/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {icPlusBlue} from '../../assets/image';

type ItemMenu = {
  icon: any;
  name: string;
};
type Props = {
  menus: ItemMenu[];
  onSelectCurrency: (item: string) => void;
  onMenu: (item: ItemMenu) => void;
  onAdd: () => void;
};

const ItemHome: React.FC<Props> = ({
  menus,
  onSelectCurrency,
  onMenu,
  onAdd,
}) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.currencyContainer}>
          {['IDR', 'USD'].map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onSelectCurrency(item)}
              key={index}
              style={{
                backgroundColor: index === 0 ? '#4263EB' : 'transparent',
                ...styles.currencyItem,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: index === 0 ? '#FFF' : '#000',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onAdd}
          style={styles.row}>
          <Image style={styles.iconAdd} source={icPlusBlue} />
          <Text style={styles.addText}>Add Currency</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        {menus?.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            onPress={() => onMenu(item)}>
            <View style={styles.menuitem}>
              <Image style={styles.menuicon} source={item.icon} />
            </View>
            <Text style={styles.menutitle}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default ItemHome;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  iconAdd: {
    height: 20,
    width: 20,
  },
  addText: {fontSize: 16, fontWeight: '600', color: '#4263EB'},
  currencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F5F7FE',
    paddingVertical: 5,
    borderRadius: 5,
  },
  currencyItem: {
    padding: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  menuitem: {
    height: 72,
    width: 72,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#E3E7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuicon: {
    width: 30,
    height: 30,
  },
  menutitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#15141F',
    textAlign: 'center',
  },
});
