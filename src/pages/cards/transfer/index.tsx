import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {iuserAdd} from '../../../assets/image';
import {Buttons, Icons} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const Transfer = (props: Props) => {
  const toTransfer = {
    adduser: {
      icon: iuserAdd,
      title: 'add',
    },
    user: [
      {
        profile:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKOA2YqrEWWyGpKZzwqWuStJRCgeW1V0AOzDcAa5BZ4nRBSJPA9g4B7r0Ts6aa0s4gj8&usqp=CAU',
        name: 'Monte Luke',
      },
      {
        profile:
          'https://media.vanityfair.com/photos/650095a4a5dad6d330c01de2/master/pass/elon-musk-amber-heard.jpg',
        name: 'Elon Musk',
      },
      {
        profile:
          'https://www.smartfren.com/app/uploads/2021/11/featured-image-37.png',
        name: 'Dianne',
      },
      {
        profile:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKz2luCXWv7d2CFrksk_DoBagNA0lax0c9FV-gvQRVbolZaz7UmauWTexb9oZYJFQ9ViI&usqp=CAU',
        name: 'Christoper',
      },
    ],
  };
  console.log(props);

  return (
    <View style={styles.container}>
      <Text style={[styles.text20, {color: 'white'}]}>Transfer</Text>
      <View style={styles.area}>
        <Text style={[styles.text20, {paddingHorizontal: 50}]}>
          Where do you want to transfer?
        </Text>

        <View style={{paddingTop: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.text16, {fontWeight: 'bold'}]}>
              Transfer to
            </Text>
            <Text style={[styles.text16, {color: '#4263EB'}]}>See all</Text>
          </View>
          <View style={styles.card_account}>
            <TouchableOpacity style={{alignItems: 'center', gap: 10}}>
              <View style={styles.contenAdd}>
                <Image
                  style={{height: 24, width: 24}}
                  source={toTransfer.adduser.icon}
                />
              </View>
              <Text style={[styles.text16, {fontSize: 12}]}>
                {toTransfer.adduser.title}
              </Text>
            </TouchableOpacity>
            {toTransfer.user.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{alignItems: 'center', gap: 10}}
                onPress={() => console.log(item)}>
                <Image style={styles.images} source={{uri: item.profile}} />
                <Text style={[styles.text16, {fontSize: 12}]}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card_amount}>
          <Text style={[styles.text16, {color: '#0C2073'}]}>Amount (USD)</Text>
          <View style={styles.amount_item}>
            <Icons type="AntDesign" name="minus" style={styles.amount_count} />
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Text style={styles.text20}>$</Text>
              <Text style={[styles.text20, {fontSize: 48}]}>75</Text>
            </View>
            <Icons type="AntDesign" name="plus" style={styles.amount_count} />
          </View>
        </View>

        <View style={{paddingTop: 90}}>
          <Buttons title="Continue" />
        </View>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#4263EB',
  },
  area: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 50,
    elevation: 10,
    padding: 20,
    paddingTop: 30,
  },
  text20: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  text16: {
    color: 'black',
    fontSize: 16,
  },
  images: {
    height: 48,
    width: 48,
    borderRadius: 100,
  },
  contenAdd: {
    height: 48,
    width: 48,
    borderRadius: 100,
    backgroundColor: '#F5F7FE',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'gray',
    elevation: 17,
  },
  card_amount: {
    backgroundColor: '#F5F7FE',
    alignItems: 'center',
    padding: 25,
    borderRadius: 16,
    marginTop: 30,
  },
  amount_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
  },
  amount_count: {
    fontSize: 18,
    borderRadius: 100,
    padding: 6,
    backgroundColor: 'white',
    color: '#4263EB',
  },

  card_account: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
});
