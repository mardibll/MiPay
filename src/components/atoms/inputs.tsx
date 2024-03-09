import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {icCallBlue, icCallGrey} from '../../assets/image';

type Props = {
  value: string;
  onChangeText: () => void;
  placeholder: string;
  secureText: boolean;
  showSecureText: boolean;
};

const Inputs: React.FC<Props> = ({
  value = '',
  onChangeText = () => {},
  placeholder = '',
  secureText = false,
  showSecureText = false,
}) => {
  return (
    <>
      <View style={styles.textContainer}>
        <Image style={styles.icon} source={true ? icCallBlue : icCallGrey} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A2A0A8"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureText ? showSecureText : false}
        />
        {secureText && (
          <Image
            style={styles.iconRight}
            source={true ? icCallBlue : icCallGrey}
          />
        )}
      </View>
    </>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#F9F9FA',
    borderColor: '#E8E8E8',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    paddingHorizontal: 10,
    height: 50,
    margin: 20,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 20,
  },
  iconRight: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    color: '#000000',
  },
});
