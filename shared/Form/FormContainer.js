import React from 'react';
import {ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

function FormContainer(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    padding: 10,
  },
});
export default FormContainer;
