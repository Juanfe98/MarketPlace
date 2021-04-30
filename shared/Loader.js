import {Container} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
const Loader = () => {
  return (
    <View style={styles.containerIndicator}>
      <ActivityIndicator animating={true} color="#0B0D44" size="large" />
    </View>
  );
};
export default Loader;

const styles = StyleSheet.create({
  containerIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
