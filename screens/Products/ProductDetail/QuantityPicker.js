import React, {useState} from 'react';
import BottomModal from '../../../shared/Modal/BottomModal';
import {Text} from 'react-native';

import {connect} from 'react-redux';
import * as productDetailActions from '../../../Redux/Actions/productDetailActions';

const QuantityPicker = props => {
  const {visibility, setModalVisibility} = props;

  return (
    <BottomModal visible={visibility} onDismiss={setModalVisibility}>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>TEST</Text>
      <Text>Last</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(QuantityPicker);
