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
} from 'native-base';

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
          {props.cartItems.map(item => (
            <ListItem style={styles.listItem} key={Math.random()} avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: item.product.image
                      ? item.product.image
                      : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                  }}
                  style={{backgroundColor: 'black', margin: 0}}
                />
              </Left>
              <Body style={styles.body}>
                <Left>
                  <Text>{item.product.name}</Text>
                </Left>
                <Right>
                  <Text>$ {item.product.price}</Text>
                </Right>
              </Body>
            </ListItem>
          ))}
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
  };
};
const styles = StyleSheet.create({
  emptyContainer: {
    height: heigth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    margin: 10,
    flexDirection: 'row',
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
