import React from 'react';
import {StyleSheet} from 'react-native';
import {Badge, Text} from 'native-base';
import {connect} from 'react-redux';

const CartIcon = props => {
  const countCartItems = () => {
    let sumQuantity = props.cartItems.reduce((total, itemValue) => {
      return total + itemValue.product.quantity;
    }, 0);
    return sumQuantity;
  };
  return props.cartItems.length ? (
    <>
      <Badge style={styles.badge}>
        <Text style={styles.text}>{countCartItems()}</Text>
      </Badge>
    </>
  ) : null;
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {cartItems: cartItems};
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: -7,
    right: -15,
  },
  text: {
    fontSize: 12,
    width: '100%',
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps)(CartIcon);
