/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';

//Screens
import ProductContainer from './screens/Products/ProductsContainer';

//Header
import Header from './shared/Header';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
