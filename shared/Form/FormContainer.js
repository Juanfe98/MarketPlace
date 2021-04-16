import React from 'react';
import {ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

function FormContainer(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
});
export default FormContainer;
