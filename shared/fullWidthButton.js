import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const {width} = Dimensions.get('window');
const fullWidthButton = props => {
  const {mainText, secundaryText, onPress, customStyles} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.stockInfo, ...customStyles}}>
        <Text style={styles.innerbtnText}>{mainText} </Text>
        <Text style={styles.detailBtnText}>
          {'  '}
          {secundaryText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  stockInfo: {
    flexDirection: 'row',
    width: width - 30,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerbtnText: {
    fontSize: 16,
  },
  detailBtnText: {
    fontSize: 16,
    color: '#CBCBCB',
  },
});

fullWidthButton.propTypes = {
  mainText: PropTypes.string,
  secundaryText: PropTypes.string,
};

export default fullWidthButton;
