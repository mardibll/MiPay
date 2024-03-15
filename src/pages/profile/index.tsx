import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icRating, icTopup, logos} from '../../assets/image';

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const Profile = (props: Props) => {
  const handleSettings = () => {
    props.navigation.navigate('Settings');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#4263EB',
      }}>
      <View
        style={{
          flex: 1,
          marginTop: '15%',
          backgroundColor: '#FFF',
          height: '90%',
          padding: 20,
          borderStartEndRadius: 30,
          borderStartStartRadius: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: -5,
            }}>
            <Image
              style={{width: 20, height: 20, borderRadius: 100}}
              source={{
                uri: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
              }}
            />
          </View>
          <View style={styles.avatarContain}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg',
              }}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 20}}>
            <Text style={styles.name}>James Lee</Text>
            <View style={styles.ratings}>
              <Image style={styles.ratingic} source={icRating} />
              <Text style={styles.ratingText}>Gold</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={handleSettings}>
            <Text style={{color: '#4263EB', fontSize: 14, fontWeight: '600'}}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            marginVertical: 20,
          }}>
          <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
            Balances
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            {['Revenue', 'Expense'].map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '48%',
                    backgroundColor: 'hsl(228, 72%, 95%)',
                    padding: 20,
                    borderRadius: 20,
                  }}>
                  <Text style={{fontWeight: '600', fontSize: 14}}>{item}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                        marginRight: 10,
                        borderWidth: 2,
                        borderRadius: 100,
                        borderColor: '#4263EB',
                      }}
                      source={icTopup}
                    />
                    <Text style={{fontSize: 16, fontWeight: '600'}}>
                      {'Rp500.000'}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>

          <View
            style={{
              backgroundColor: 'hsl(228, 72%, 95%)',
              padding: 20,
              paddingVertical: 30,
              borderRadius: 20,
              marginVertical: 10,
            }}>
            <Text style={{fontWeight: '600', fontSize: 14}}>
              Indicator Balances
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View style={{flex: 1, marginRight: 15}}>
                <View
                  style={{
                    height: 15,
                    width: '100%',
                    backgroundColor: 'hsl(228, 72%, 85%)',
                    borderRadius: 20,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    height: 15,
                    width: '50%',
                    backgroundColor: '#4263EB',
                    borderRadius: 20,
                  }}
                />
              </View>
              <Text style={{fontWeight: '600', fontSize: 16}}>50%</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#000',
              padding: 20,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 10,
                borderWidth: 2,
                borderRadius: 100,
                borderColor: '#FFF',
              }}
              source={icTopup}
            />
            <View>
              <Text style={{color: '#FFF', fontSize: 14, fontWeight: '500'}}>
                Text Notification
              </Text>
              <Text
                numberOfLines={1}
                style={{color: '#FFF', fontSize: 12, fontWeight: '300'}}>
                Ne notification from other people now
              </Text>
            </View>
          </View>

          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: '#A2A0A8',
                includeFontPadding: true,
                padding: 20,
              }}>
              MiPay is a financial platform to manage your business and money.
            </Text>
            <Image
              style={{
                borderRadius: 50,
                height: 40,
                width: 40,
                backgroundColor: 'hsl(228, 72%, 95%)',
              }}
              source={logos}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  ratings: {
    backgroundColor: 'hsl(40, 96%, 92%)',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
    width: '50%',
    marginTop: 6,
  },
  ratingic: {
    height: 15,
    width: 15,
    marginRight: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#F6A609',
  },
});
