import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  variantColor?: string;
  variantText?: string;
  text: string;
  flatButton?: boolean;
  action: ( textNumber : string) => void;
}

const ButtonCalc = ({
  text,
  variantColor = '#2D2D2D',
  variantText = 'white',
  flatButton = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
        <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
            ...styles.button,
            backgroundColor: variantColor,
            width: flatButton ? 165 : 80,
            alignItems: flatButton ? 'flex-start' : 'center',
            paddingLeft: flatButton ? 15 : 0,
        }}>
        <Text style={{...styles.buttonText, color: variantText}}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
  },
});
