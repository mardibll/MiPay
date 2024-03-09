import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ItemHistoryTransaction} from '..';

type Item = string | number | React.ReactNode;
type Props = {
  onItem: (item: Item) => void;
  onSeeALl: () => void;
  withHead: boolean;
};

const HistoryList = (props: Props) => {
  const {onItem, onSeeALl, withHead} = props;
  return (
    <View style={[styles.container, styles.shadow]}>
      {withHead && (
        <View style={styles.titleContent}>
          <Text style={styles.title}>Transactions</Text>
          <TouchableOpacity onPress={onSeeALl}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        {[1, 2, 4, 5, 6].map((item, index) => {
          return (
            <ItemHistoryTransaction key={index} onPress={() => onItem(item)} />
          );
        })}
      </View>
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  titleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#15141F',
  },
  seeAll: {
    fontWeight: '400',
    fontSize: 16,
    color: '#4263EB',
  },
});
