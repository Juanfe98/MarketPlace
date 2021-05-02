import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Text} from 'react-native-paper';

function InputForm(props) {
  const {
    placeholder,
    name,
    id,
    value,
    errorMessage,
    onChangeText,
    secureTextEntry,
    keyboardType,
    icon = null,
  } = props;

  // TODO: El Input no funciona cuando el celular esta en modo display = dark
  return (
    <>
      <TextInput
        mode="flat"
        style={styles.input}
        name={name}
        id={id}
        label={placeholder.toUpperCase()}
        value={value}
        error={errorMessage}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        right={<TextInput.Icon name={() => icon} />}
      />
      <Text style={styles.errorText}>{errorMessage}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: 'transparent',
    borderColor: '#EBEBEB',
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
});

export default InputForm;
