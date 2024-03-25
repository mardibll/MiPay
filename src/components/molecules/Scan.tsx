import {
  Image,
  Linking,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {icqris} from '../../assets/image';
import Icons from '../atoms/icons';

type Props = {};

const Scanner = (props: Props) => {
  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera to scan QR codes.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
          // Handle permission denied scenario
        }
      } else {
        // For iOS, permission is granted by default.
        console.log('iOS device: Camera permission granted');
      }
    } catch (err) {
      console.warn('Error requesting camera permission:', err);
      // Handle error scenario
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const onSuccess = (e: any) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  const [onLamp, setonLamp] = useState(true);

  const data = {
    contenTop: () => {
      return (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 30,
            position: 'absolute',
          }}>
          <Icons name="close" style={{fontSize: 20, color: 'white'}} />
          <Image
            source={icqris}
            style={{resizeMode: 'center', height: 60, width: 75}}
          />
          <Icons
            type="Feather"
            name={onLamp ? 'zap-off' : 'zap'}
            style={{fontSize: 20, color: 'white'}}
            onPress={() => setonLamp(!onLamp)}
          />
        </View>
      );
    },

    contenBottom: () => {
      return (
        <View style={{backgroundColor: 'red', height: '100%'}}>
          <View>
            <TouchableOpacity>
              <Text>Upload QR</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Input Tiket Parkir</Text>
            </TouchableOpacity>
          </View>
          <Text>Bisa juga bayar pakai</Text>
          <View>
            <TouchableOpacity>
              <Text>Kode QRIS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Top UP</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text>Loyalty code</Text>
          </TouchableOpacity>
        </View>
      );
    },
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      cameraContainerStyle={{
        position: 'absolute',
      }}
      topViewStyle={{zIndex: 9999}}
      containerStyle={{}}
      bottomViewStyle={{zIndex: 9999}}
      flashMode={
        onLamp
          ? RNCamera.Constants.FlashMode.off
          : RNCamera.Constants.FlashMode.torch
      }
      topContent={data.contenTop()}
      bottomContent={data.contenBottom()}
    />
  );
};

export default Scanner;

const styles = StyleSheet.create({
  centerText: {
    // flex: 1,
    // fontSize: 18,
    // padding: 32,
    // color: 'red',
    // zIndex: 99999,
    // position: 'absolute',
    // backgroundColor: 'red',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    // padding: 16,
  },
});
