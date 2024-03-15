import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar} from '../../components';

type Props = {
  navigation: {
    goBack: () => void;
  };
};

const Settings = (props: Props) => {
  const {navigation} = props;

  const handleBack = () => navigation.goBack();

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Appbar backabled title="Settings" onBack={handleBack} />
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
