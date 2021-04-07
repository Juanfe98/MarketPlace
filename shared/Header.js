import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={style.header}>
      <Image
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={{height: 50, width: '70%'}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
export default Header;
