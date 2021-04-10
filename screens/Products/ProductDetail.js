import React, {useState, useEffect} from 'react';
import {View, ScrollView, Image, StyleSheet, Text, Button} from 'react-native';
import {Left, Right, Container, H1} from 'native-base';

const ProductDetail = props => {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState('');
  return (
    <Container style={styles.container}>
      <ScrollView style={{marginBottom: 40, padding: 5}}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: item.image
                ? item.image
                : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
            }}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.contentHeader}>{item.name}</Text>
          <Text style={styles.contentText}>{item.brand}</Text>
        </View>
        {/* TODO: Agregar descripcion, descripcion rica y disponibilidad del producto */}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Left>
          <Text style={styles.price}>$ {item.price}</Text>
        </Left>
        <Right>
          <Button title="Agregar" />
        </Right>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  imageContainer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
  },
  image: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  price: {
    fontSize: 24,
    margin: 20,
    color: 'red',
  },
});
export default ProductDetail;
