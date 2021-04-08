import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header, Input, Container, Item, Icon} from 'native-base';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import Banner from '../../shared/Banner';

const data = require('../../assets/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  useEffect(() => {
    setProducts(data);
    setProductsFilter(data);
    return () => {
      setProducts([]);
      setProductsFilter([]);
      setOpenSearch();
    };
  }, []);

  const showOpenSearch = () => {
    setOpenSearch(true);
  };

  const hideOpenSearch = () => {
    setOpenSearch(false);
  };

  const filterProducts = text => {
    setProductsFilter(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };
  return (
    <Container>
      <Header searchBar style={styles.searchBarContainer}>
        <Item>
          <Icon name="ios-search" />
          <Input
            onChangeText={text => {
              filterProducts(text);
            }}
            onFocus={showOpenSearch}
            placeholder="Buscar"
          />
          <Icon name="ios-close" onPress={hideOpenSearch} />
        </Item>
      </Header>
      {openSearch == true ? (
        <ProductSearch productsFiltered={productsFilter} />
      ) : (
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View style={styles.background}>
              <ProductCard products={data} />
            </View>
          </View>
        </ScrollView>
      )}
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
