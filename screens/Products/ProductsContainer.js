import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, Text, Dimensions} from 'react-native';
import {Header, Input, Container, Item, Icon} from 'native-base';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import CategoriesFilter from './CategoriesFilter';
import Banner from '../../shared/Banner';

var {height} = Dimensions.get('window');

const data = require('../../assets/products.json');
const categoriesData = require('../../assets/categories.json');

const ProductContainer = props => {
  console.log(props);
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [initialState, setInitialState] = useState([]);
  const [active, setActive] = useState();

  useEffect(() => {
    setProducts(data);
    setProductsFilter(data);
    setOpenSearch(false);
    setCategories(categoriesData);
    setInitialState(data);
    setProductsCtg(data);
    setActive(-1);
    return () => {
      setProducts([]);
      setProductsFilter([]);
      setOpenSearch();
      setCategories([]);
      setInitialState([]);
      setActive();
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

  const filterByCategory = category => {
    category == 'all'
      ? [setProductsCtg(initialState), setActive(true)]
      : [
          setProductsCtg(
            products.filter(product => product.category.$oid == category),
            setActive(true),
          ),
        ];
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
            <View>
              <CategoriesFilter
                categories={categories}
                filterByCategory={filterByCategory}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
              <View style={styles.background}>
                <ProductCard
                  products={productsCtg}
                  navigation={props.navigation}
                />
              </View>
            ) : (
              <View style={[styles.center, {marginTop: 60}]}>
                <Text>No se encontraron productos para esta categoria</Text>
              </View>
            )}
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
    height: height,
  },
  searchBarContainer: {
    backgroundColor: '#cecece',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductContainer;
