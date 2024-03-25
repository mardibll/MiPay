import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BarChart, PieChart} from 'react-native-gifted-charts';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const Charts = (props: Props) => {
  const pieData = [
    {value: 43, color: '#4263EB'},
    {value: 25, color: 'yellow'},
    {value: 18, color: 'red'},
    {value: 14, color: 'black'},
  ];
  const barData = [
    {value: 20, label: 'Jun'},
    {value: 30, label: 'Jul'},
    {
      value: 50,
      label: 'Aug',
      topLabelComponent: () => (
        <Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>50</Text>
      ),
    },
    {value: 40, label: 'Sep'},
    {value: 30, label: 'Oct'},
    {value: 30, label: 'Nov'},
  ];
  const menu = [{title: 'Week'}, {title: 'Mounth'}, {title: 'Year'}];
  const [presseditem, setpresseditem] = useState('Week');

  const renderPieChart = () => {
    return (
      <PieChart
        data={pieData}
        innerRadius={65}
        radius={100}
        strokeWidth={10}
        strokeColor="white"
        centerLabelComponent={() => {
          return (
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>hsdjajklc</Text>
              <Text>hsdjajklc</Text>
            </View>
          );
        }}
      />
    );
  };
  const renderBarChart = () => {
    return <BarChart width={400} data={barData} frontColor="#177AD5" />;
  };
  return (
    <View style={{padding: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {menu.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.btn_menu,
              {
                elevation: item.title === presseditem ? 8 : 0,
                backgroundColor:
                  item.title === presseditem ? '#443ca4' : 'transparent',
              },
            ]}
            activeOpacity={0.5}
            onPressIn={() => setpresseditem(item.title)}
            key={index}>
            <Text
              style={{color: item.title === presseditem ? 'white' : 'black'}}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{height: 270, justifyContent: 'center', alignItems: 'center'}}>
        {presseditem === 'Week' && renderPieChart()}
        {presseditem === 'Mounth' && renderBarChart()}
      </View>
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  btn_menu: {
    borderWidth: 0.5,
    height: 38,
    borderRadius: 10,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
  },
});
