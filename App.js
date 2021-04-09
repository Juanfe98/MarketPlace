/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Navigators
import Main from './Navigators/Main';

//Header
import Header from './shared/Header';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
};

export default App;
