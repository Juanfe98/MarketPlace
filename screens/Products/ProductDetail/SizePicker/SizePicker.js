import React from 'react';
import BottomModal from '../../../../shared/Modal/BottomModal';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import PickButtons from './PickSizeButtons';

const SizePicker = props => {
  const initialItems = ['S', 'M', 'L', 'XL', 'XXL', 'M', 'L', 'XL', 'XXL'];
  const {size, setSize, product} = props;
  const avaliableSizes = product.attributes.sizes.map(size => size.size);
  return (
    <View>
      <Text style={styles.textSize}>Talla:</Text>
      <PickButtons elements={avaliableSizes} size={size} setSize={setSize} />
    </View>
  );
};

const styles = StyleSheet.create({
  textSize: {
    marginLeft: 15,
    marginTop: 15,
  },
});

export default SizePicker;
