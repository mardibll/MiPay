/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {icGoogle} from '../../assets/image';

type Props = {
  onPress: () => void;
  title: string;
  icon: boolean;
  bg: string;
  bordered: boolean;
};

const Buttons: React.FC<Props> = ({
  onPress,
  title,
  icon,
  bg,
  bordered,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: bg ? bg : '#4263EB',
          borderWidth: bordered ? 1 : 0,
        },
      ]}>
      {icon && (
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={icGoogle} />
        </View>
      )}
      <View
        style={{
          marginLeft: icon ? -60 : 0,
          ...styles.textContainer,
        }}>
        <Text
          style={[styles.textBtn, {color: bordered ? '#000000' : '#FFFFFF'}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4263EB',
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    height: 50,
    margin: 20,
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '600',
  },
  iconContainer: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
