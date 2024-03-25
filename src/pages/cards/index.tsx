import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icons, MipayCard} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const Cards = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>MyCards</Text>
      <MipayCard />

      <View>
        <Text>Card Used Frequency</Text>
        <Text>70%</Text>
        <View>
          
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#4263EB',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
          elevation: 5,
        }}>
        <Text style={{color: 'white'}}>Add card</Text>
        <Icons
          type="AntDesign"
          name="plus"
          style={{fontSize: 20, color: 'white'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
    padding: 20,
  },
});
