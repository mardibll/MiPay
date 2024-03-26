import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
} from 'react-native-gifted-charts';

import Charts from '../../components/molecules/charts';
import {HistoryList} from '../../components';
type Props = {};

const Statistic = (props: Props) => {
  const [onChart, setonChart] = useState(true);
  const scrollViewRef = useRef();
  const lastScrollPosition = useRef(0);
  const handleScroll = event => {
    const currentScrollPosition = event.nativeEvent.contentOffset.y;

    if (currentScrollPosition > lastScrollPosition.current) {
      setonChart(!onChart);
    } else {
      setonChart(!onChart);
    }

    lastScrollPosition.current = currentScrollPosition;
  };
  return (
    <ScrollView style={{}} onScroll={handleScroll}>
      <Text>Static</Text>
      {/* <View style={{}}>
        <Charts />
        <HistoryList withHead onItem={item => {}} onSeeALl={() => {}} />

        <HistoryList withHead onItem={item => {}} onSeeALl={() => {}} />
        <HistoryList withHead onItem={item => {}} onSeeALl={() => {}} />
      </View> */}
    </ScrollView>
  );
};

export default Statistic;

const styles = StyleSheet.create({});
