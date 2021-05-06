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
import Toast from 'react-native-toast-message';

//Redux
import {Provider} from 'react-redux';
import store from './Redux/Store';

//React Native Paper
import {Provider as PaperProvider} from 'react-native-paper';

//Navigators
import Main from './Navigators/Main';

//Header
import Header from './shared/Header';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Main />
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
