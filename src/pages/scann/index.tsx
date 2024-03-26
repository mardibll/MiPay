import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Scanner from '../../components/molecules/Scan';

type Props = {};

const Scann = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <Text>Scan</Text>
      {/* <Scanner /> */}
    </View>
  );
};

export default Scann;

const styles = StyleSheet.create({});
