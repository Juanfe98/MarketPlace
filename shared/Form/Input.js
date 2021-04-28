import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {TextInput} from 'react-native-paper';

function InputForm(props) {
  const {
    placeholder,
    name,
    id,
    value,
    autoCorrect,
    onChangeText,
    secureTextEntry,
    keyboardType,
  } = props;

  // TODO: El Input no funciona cuando el celular esta en modo display = dark
  return (
    <TextInput
      mode="flat"
      style={styles.input}
      label={placeholder.toUpperCase()}
      name={name}
      id={id}
      value={value}
      autoCorrect={autoCorrect}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: 'transparent',
    borderColor: '#EBEBEB',
  },
});

export default InputForm;
