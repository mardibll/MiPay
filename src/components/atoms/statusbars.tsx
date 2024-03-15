import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import React from 'react';

type Props = {
  bgColor: string;
};

const Statusbars = (props: Props) => {
  const {bgColor} = props;
  let bg = bgColor ? bgColor : '#4263EB';
  return (
    <View style={[styles.statusBar, {backgroundColor: bg}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={bg}
          {...props}
          barStyle={'light-content'}
        />
      </SafeAreaView>
    </View>
  );
};
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 0 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

export default Statusbars;
