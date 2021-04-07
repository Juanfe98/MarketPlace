import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ProductCard from './ProductCard';

const data = require('../../assets/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View style={styles.background}>
      <ProductCard products={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gainsboro',
    flex: 1,
  },
});

export default ProductContainer;
