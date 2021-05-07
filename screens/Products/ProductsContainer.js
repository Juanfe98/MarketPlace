import React, {useState, useCallback, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, StyleSheet, ScrollView, Text, Keyboard} from 'react-native';
import {Header, Input, Container, Item, Icon} from 'native-base';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import CategoriesFilter from './Categories/CategoriesFilter';
import Banner from '../../shared/Banner';
import Loader from '../../shared/Loader';
import {axiosInstance} from '../../Axios/axiosInstance';

const ProductContainer = props => {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [initialState, setInitialState] = useState([]);
  const [active, setActive] = useState();
  const [loader, setLoader] = useState(false);

  const getProducts = async () => {
    setLoader(true);
    await axiosInstance
      .get('products')
      .then(response => {
        setProducts(response.data);
        setProductsFilter(response.data);
        setInitialState(response.data);
        setProductsCtg(response.data);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getCategories = async () => {
    await axiosInstance
      .get('categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
    getCategories();
    setOpenSearch(false);
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
    Keyboard.dismiss();
    setOpenSearch(false);
  };

  const filterProducts = text => {
    setProductsFilter(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const filterByCategory = category => {
    category === 'all'
      ? [setProductsCtg(initialState), setActive(true)]
      : [
          setProductsCtg(
            products.filter(product => product.category._id === category),
            setActive(true),
          ),
        ];
  };

  return (
    <Container style={styles.background}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <View>
            <CategoriesFilter
              categories={categories}
              filterByCategory={filterByCategory}
              productsCtg={productsCtg}
              active={active}
              setActive={setActive}
            />
          </View>
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
          {openSearch === true ? (
            <ProductSearch
              productsFiltered={productsFilter}
              navigation={props.navigation}
            />
          ) : (
            <ScrollView>
              <View>
                <Banner />
              </View>
              {productsCtg.length > 0 ? (
                <View>
                  <ProductCard
                    products={productsCtg}
                    navigation={props.navigation}
                  />
                </View>
              ) : (
                // TODO: Crear componente para mostrar cuando no hay productos
                <View style={[styles.center, {marginTop: 60}]}>
                  <Text>No se encontraron productos para esta categoria</Text>
                </View>
              )}
            </ScrollView>
          )}
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f8f8f8',
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
