import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Card, CardItem} from 'native-base';

var width = Dimensions.get('window').width;
const printTasks = products => {
  let key = 1;
  return products.map(products => {
    key = key + 1;
    return (
      <CardItem bordered style={styles.task} key={key}>
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
        <Text style={styles.title}>
          {products.name.length > 15
            ? products.name.substring(0, 15 - 3) + '...'
            : products.name}
        </Text>
        <Text style={styles.price}>${products.price}</Text>
      </CardItem>
    );
  });
};

const ProductCard = props => {
  const {products} = props;
  return (
    <View style={styles.container}>
      <Card transparent style={styles.tasksContainer}>
        {printTasks(products)}
      </Card>
    </View>
  );
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
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  card: {
    marginBottom: '10%',
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 90,
    backgroundColor: 'transparent',
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  price: {
    fontSize: 22,
    color: 'orange',
    marginTop: '10%',
  },
});

export default ProductCard;
