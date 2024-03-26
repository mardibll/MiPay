import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icRating} from '../../assets/image';
import Statusbars from '../atoms/statusbars';
import Icons from '../atoms/icons';

type Props = {
  ishome: boolean;
  backabled: boolean;
  bgColor: string;
  title: string;
  onBack: () => void;
};

const Appbar = (props: Props) => {
  const {ishome, backabled, bgColor, title, onBack} = props;

  const renderHeaderHome = () => {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.greetname}>James Lee</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.ratings}>
            <Image style={styles.ratingic} source={icRating} />
            <Text style={styles.ratingText}>Gold</Text>
          </View>
          <View style={styles.avatarContain}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderHeaders = () => {
    return (
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.left}>
            {backabled && (
              <TouchableOpacity onPress={onBack}>
                <Icons name="arrow-back-ios" size={20} color={'#FFF'} />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.center}>
            <Text style={{color: '#FFF', fontSize: 16, fontWeight: '500'}}>
              {title}
            </Text>
          </View>
          <View style={styles.right}>{/* <Text>Ap</Text> */}</View>
        </View>
      </View>
    );
  };
  return (
    <>
      {/* <Statusbars bgColor={bgColor} /> */}
      {ishome ? renderHeaderHome() : renderHeaders()}
    </>
  );
};

Appbar.defaultProps = {
  ishome: false,
  backabled: false,
  bgColor: '',
  title: '',
  onBack: () => {},
};
export default Appbar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '400',
    color: '#111827',
  },
  greetname: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratings: {
    backgroundColor: 'hsl(40, 96%, 92%)',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    flexDirection: 'row',
  },
  ratingic: {
    height: 18,
    width: 18,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 12,
    color: '#F6A609',
  },
  avatarContain: {
    borderStyle: 'dashed',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#F6A609',
    height: 75,
    width: 75,
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  content: {
    backgroundColor: '#4263EB',
    padding: 15,
  },
  left: {
    width: '10%',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: '10%',
    alignItems: 'flex-end',
  },
});
