import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Input, Container, Item, Icon} from 'native-base';

import ProductCard from './ProductCard';

const data = require('../../assets/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  useEffect(() => {
    setProducts(data);
    setProductsFilter(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <Container>
      <Header searchBar style={styles.searchBarContainer}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Buscar" />
        </Item>
      </Header>
      <View style={styles.background}>
        <ProductCard products={data} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gainsboro',
    flex: 1,
  },
  searchBarContainer: {
    backgroundColor: '#cecece',
  },
});

export default ProductContainer;
