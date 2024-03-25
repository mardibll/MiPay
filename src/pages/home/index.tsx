import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {icTopup, icTransfer, icWithdraw} from '../../assets/image';
import {Appbar, HistoryList, ItemHome, MipayCard} from '../../components';

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Home: React.FC<Props> = ({navigation}) => {
  const menus = [
    {
      name: 'Top-up',
      icon: icTopup,
    },
    {
      name: 'Withdraw',
      icon: icWithdraw,
    },
    {
      name: 'Transfer',
      icon: icTransfer,
    },
  ];
  const handleTransaksi = (onmenu: string) => {console.log(onmenu)
  
    if (onmenu === 'Top-up') {
    } else if (onmenu === 'Withdraw') {
    } else if (onmenu === 'Transfer') {
      navigation.navigate('Transfer');
    }
  };
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      style={styles.scrollView}>
      <View style={styles.container}>
        <Appbar ishome />
        <ItemHome
          menus={menus}
          onAdd={() => {}}
          onMenu={item => {
            handleTransaksi(item.name);
          }}
          onSelectCurrency={item => {}}
        />
        <MipayCard />
        <HistoryList withHead onItem={item => {}} onSeeALl={() => {}} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
    paddingTop: 45,
  },
});
