import React from 'react';
import BottomModal from '../../../shared/Modal/BottomModal';
import {StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';

import {connect} from 'react-redux';
import * as productDetailActions from '../../../Redux/Actions/productDetailActions';

const QuantityPicker = props => {
  const {visibility, setModalVisibility, quantity, setQuantity} = props;
  const initialItems = [1, 2, 3, 4, 5, 6];

  const updateQuantity = quantity => {
    setQuantity(quantity);
    setModalVisibility(false);
  };

  return (
    <BottomModal visible={visibility} onDismiss={setModalVisibility}>
      {initialItems.map((item, index) => (
        <ListItem
          key={index}
          bottomDivider
          containerStyle={item === quantity && {backgroundColor: '#F5F5F5'}}
          onPress={() => updateQuantity(item)}>
          <ListItem.Content style={styles.listContainer}>
            <ListItem.Title>{`${item} Unidades`}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
      <ListItem bottomDivider>
        <ListItem.Content style={styles.listContainer}>
          <ListItem.Title>Más unidades</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </BottomModal>
  );
};

const mapStateToProps = state => {
  const {visibility} = state.productDetail;
  return {
    visibility: visibility,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setModalVisibility: () => {
      dispatch(productDetailActions.setModalVisibility());
    },
  };
};

const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuantityPicker);
