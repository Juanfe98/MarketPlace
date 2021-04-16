import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {
  Container,
  H1,
  ListItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Text,
  Icon,
} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
import CartItem from './CartItem';

var {width, heigth} = Dimensions.get('window');
//Libreria para conectar el store al componente y tener acceso al estado en store
import {connect} from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

const Cart = props => {
  let total = 0;
  props.cartItems.map(item => {
    return (total += item.product.price);
  });
  return (
    <>
      {props.cartItems.length ? (
        <Container>
          <H1 style={{alignSelf: 'center'}}>Carro de Compras</H1>
          <SwipeListView
            data={props.cartItems}
            renderItem={item => {
              return <CartItem item={item} />;
            }}
            renderHiddenItem={item => {
              return (
                <View style={styles.hiddenContainer}>
                  <TouchableOpacity
                    style={styles.hiddenButton}
                    onPress={() => props.removeItem(item.item)}>
                    <Icon name="trash" style={{color: 'white'}} />
                  </TouchableOpacity>
                </View>
              );
            }}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
          <View style={styles.bottomContainer}>
            <Left>
              <Text>$ {total.toFixed(2)}</Text>
            </Left>
            <Right>
              <Button
                title="Limpiar"
                onPress={() => {
                  props.clearCart();
                }}
              />
            </Right>
            <Right>
              <Button title="Pagar" />
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>No has Añadido Productos</Text>
          <Text>Añade algunos para empezar!</Text>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {cartItems: cartItems};
};

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => {
      dispatch(actions.clearCart());
    },
    removeItem: product => {
      dispatch(actions.removeFromCart(product));
    },
  };
};
const styles = StyleSheet.create({
  emptyContainer: {
    height: heigth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 20,
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  hiddenButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    height: 60,
    width: width / 1.2,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
