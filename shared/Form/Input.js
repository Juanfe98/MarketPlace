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
    leftIcon = null,
    onFocus = null,
    customStyle = null,
    underlineColor = null,
  } = props;

  // TODO: El Input no funciona cuando el celular esta en modo display = dark
  return (
    <>
      <TextInput
        mode="flat"
        underlineColor={underlineColor}
        style={customStyle ? customStyle : styles.input}
        name={name}
        id={id}
        label={placeholder.toUpperCase()}
        value={value}
        error={errorMessage}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        right={icon ? <TextInput.Icon name={() => icon} /> : undefined}
        left={leftIcon ? <TextInput.Icon name={() => leftIcon} /> : undefined}
        onFocus={onFocus}
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
