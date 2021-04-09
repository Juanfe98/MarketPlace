import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={style.header}>
      <Image
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={{height: 55}}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
});
export default Header;
