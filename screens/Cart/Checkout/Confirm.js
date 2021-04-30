import {
  Container,
  ListItem,
  Body,
  Text,
  Content,
  Header,
  Title,
  Left,
  Thumbnail,
  Right,
  Button,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

//Redux
import {connect} from 'react-redux';
import * as actions from '../../../Redux/Actions/cartActions';

function Confirm(props) {
  const confirm = () => {
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate('Cart');
    }, 500);
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title style={{alignSelf: 'center', alignContent: 'center'}}>
            Verifica tu información
          </Title>
        </Body>
      </Header>
      {props.route.params && (
        <Content>
          <ListItem
            itemHeader
            first
            style={{
              paddingBottom: 10,
            }}>
            <Text style={{color: '#E60000', fontSize: 20}}>Datos de Envío</Text>
          </ListItem>
          <ListItem>
            <Body>
              <Text>País: {props.route.params.order.country}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Ciudad: {props.route.params.order.city}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>
                Dirección 1: {props.route.params.order.shippingAddress1}
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>
                Dirección 2: {props.route.params.order.shippingAddress2}
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Código Postal: {props.route.params.order.zip}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Celular: {props.route.params.order.phone}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Método de Pago: {props.route.params.order.payment}</Text>
            </Body>
          </ListItem>
          <ListItem
            itemHeader
            last
            style={{
              paddingBottom: 10,
              paddingTop: 20,
            }}>
            <Text style={{color: '#E60000', fontSize: 20}}>
              Información Productos
            </Text>
          </ListItem>

          {props.route.params.order.orderItems.map(orderItem => {
            return (
              <ListItem thumbnail key={Math.random()}>
                <Left>
                  <Thumbnail
                    square
                    source={{
                      uri: orderItem.product.image
                        ? orderItem.product.image
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                    }}
                  />
                </Left>
                <Body>
                  <Text>{orderItem.product.name}</Text>
                  <Text note numberOfLines={1}>
                    {orderItem.product.description}
                  </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon name="arrow-right" color="gray" />
                  </Button>
                </Right>
              </ListItem>
            );
          })}
          <View style={styles.btnContainer}>
            <Button
              style={styles.btn}
              onPress={() => {
                confirm();
              }}>
              <Text style={{color: 'white'}}>Continuar</Text>
            </Button>
          </View>
        </Content>
      )}
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => {
      dispatch(actions.clearCart());
    },
  };
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  btnContainer: {
    alignSelf: 'center',
  },
  btn: {
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'green',
    marginTop: 30,
    elevation: 40,
  },
});

export default connect(null, mapDispatchToProps)(Confirm);
