import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Card, CardItem} from 'native-base';
import {connect} from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

var {width, height} = Dimensions.get('window');

const ProductCard = props => {
  const {products, addItemToCart} = props;
  const printTasks = products => {
    let key = 1;
    return products.map(products => {
      key = key + 1;
      return (
        <CardItem bordered style={styles.task} key={key}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Product Detail', {item: products});
            }}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: products.image
                  ? products.image
                  : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
              }}
            />
            <View style={styles.card} />
            <View style={styles.contentCardContainer}>
              <Text style={styles.title}>
                {products.name.length > 15
                  ? products.name.substring(0, 15 - 3) + '...'
                  : products.name}
              </Text>
              <Text style={styles.price}>${products.price}</Text>
              <Button
                transparent
                style={styles.btnAdd}
                onPress={() => {
                  addItemToCart(products);
                }}>
                <Text style={styles.txtAdd}>Agregar</Text>
              </Button>
            </View>
          </TouchableOpacity>
        </CardItem>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Card transparent style={styles.tasksContainer}>
        {printTasks(products)}
      </Card>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => {
      dispatch(actions.addToCart({quantity: 1, product}));
    },
  };
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  tasksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  task: {
    marginTop: '10%',
    marginRight: '3%',
    marginLeft: '3%',
    width: '44%',
    minHeight: height / 3,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  card: {
    marginBottom: '10%',
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 90,
    backgroundColor: 'transparent',
    left: -17,
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    position: 'absolute',
    left: -15,
    top: -25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  price: {
    fontSize: 22,
    color: 'orange',
    marginTop: '10%',
  },
  btnAdd: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAdd: {
    color: 'blue',
  },
  contentCardContainer: {
    left: -15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default connect(null, mapDispatchToProps)(ProductCard);
