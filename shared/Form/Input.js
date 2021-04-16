import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input(props) {
  const {
    placeholder,
    name,
    id,
    value,
    autoCorrect,
    onChangeText,
    onfocus,
    secureTextEntry,
    keyboardType,
  } = props;
  <TextInput
    style={}
    placeholder={placeholder}
    name={name}
    id={id}
    value={value}
    autoCorrect={autoCorrect}
    onChangeText={onChangeText}
    onFocus={onfocus}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}></TextInput>;
}

const styles = StyleSheet.create({
  Input: {
    width: '80%',
    height: 60,
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default Input;
