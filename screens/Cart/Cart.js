import React from 'react';
import {Text, View} from 'react-native';

//Libreria para conectar el store al componente y tener acceso al estado en store
import {connect} from 'react-redux';

const Cart = props => {
  return (
    <View style={{flex: 1}}>
      {props.cartItems.map(x => (
        <Text>{x.product.name}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {cartItems: cartItems};
};

export default connect(mapStateToProps, null)(Cart);
