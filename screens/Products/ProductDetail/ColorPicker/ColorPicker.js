import React from 'react';
import BottomModal from '../../../../shared/Modal/BottomModal';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import PickColorButtons from './PickColorButtons';

const SizePicker = props => {
  const initialItems = [
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'blue',
  ];
  const {color, setColor, avaliableColors} = props;

  return (
    <View>
      <Text style={styles.textSize}>Color:</Text>
      <PickColorButtons
        elements={avaliableColors}
        color={color}
        setColor={setColor}
      />
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
