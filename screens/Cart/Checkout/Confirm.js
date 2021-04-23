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
  const dataArray = [
    {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
  ];

  props.route.params = {
    order: {
      order: {
        city: 'Girardot ',
        country: 'Anguilla',
        dateOrdered: 1619066735455,
        orderItems: [
          {
            product: {
              __v: 0,
              _id: [{$oid: 1}],
              brand: 'IKEA',
              category: [Object],
              countInStock: 10,
              description: 'beautiful chair for garden',
              image: '',
              isFeatured: true,
              name: 'Garden Chair',
              numReviews: 0,
              price: 350.9,
              rating: 5,
            },
            quantity: 1,
          },
          {
            product: {
              __v: 0,
              _id: [{$oid: 2}],
              brand: 'PS3',
              category: [Object],
              countInStock: 25,
              description: 'The most hard FIFA ever',
              image: '',
              isFeatured: true,
              name: 'FIFA 20',
              numReviews: 0,
              price: 250,
              rating: 1,
            },
            quantity: 1,
          },
          {
            product: {
              __v: 0,
              _id: [{$oid: 3}],
              brand: 'PS3',
              category: [Object],
              countInStock: 25,
              description: 'The most hard FIFA ever',
              image: '',
              isFeatured: true,
              name: 'FIFA 20',
              numReviews: 0,
              price: 250,
              rating: 1,
            },
            quantity: 1,
          },
          {
            product: {
              __v: 0,
              _id: [{$oid: 4}],
              brand: 'OBI',
              category: [Object],
              countInStock: 10,
              description: 'beautiful Swimming Pool for garden',
              image: '',
              isFeatured: true,
              name: 'Swimming Pool',
              numReviews: 0,
              price: 1350.9,
              rating: 5,
            },
            quantity: 1,
          },
          {
            product: {
              __v: 0,
              _id: [{$oid: 5}],
              brand: 'OBIS',
              category: [Object],
              countInStock: 5,
              description: 'Grass Cut Machine for garden',
              image:
                'https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w',
              isFeatured: true,
              name: 'Grass Cut Machine',
              numReviews: 0,
              price: 490.9,
              rating: 5,
            },
            quantity: 1,
          },
        ],
        phone: '3043777072',
        shippingAddress1: 'Dir 1',
        shippingAddress2: 'Dir 2',
        zip: '252432',
      },
    },
  };

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
              <Text>País: {props.route.params.order.order.country}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Ciudad: {props.route.params.order.order.city}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>
                Dirección 1: {props.route.params.order.order.shippingAddress1}
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>
                Dirección 2: {props.route.params.order.order.shippingAddress2}
              </Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Código Postal: {props.route.params.order.order.zip}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Celular: {props.route.params.order.order.phone}</Text>
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

          {props.route.params.order.order.orderItems.map(orderItem => {
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
