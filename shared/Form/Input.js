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

  return (
    <TextInput
      style={styles.Input}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      autoCorrect={autoCorrect}
      onChangeText={onChangeText}
      onFocus={onfocus}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      placeholderTextColor="#001B42"
      color="#001B42"
    />
  );
}

const styles = StyleSheet.create({
  Input: {
    width: '80%',
    height: 60,
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: '#001B42',
    borderWidth: 1.5,
  },
});

export default Input;
