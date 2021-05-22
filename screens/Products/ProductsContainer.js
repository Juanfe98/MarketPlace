import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container} from 'native-base';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import CategoriesFilter from './Categories/CategoriesFilter';
import Banner from '../../shared/Banner';
import Loader from '../../shared/Loader';
import Input from '../../shared/Form/Input';
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
          <CategoriesFilter
            categories={categories}
            filterByCategory={filterByCategory}
            productsCtg={productsCtg}
            active={active}
            setActive={setActive}
          />
          {/* TODO: Limpiar Input cuando se busca un producto o cuando se da en la X */}
          <Input
            placeholder="Buscar"
            name="name"
            id="name"
            underlineColor="transparent"
            customStyle={{
              marginTop: 30,
              margin: 15,
              backgroundColor: 'white',
              borderRadius: 50,
              borderTopEndRadius: 50,
              borderTopStartRadius: 50,
            }}
            onChangeText={text => {
              filterProducts(text);
            }}
            onFocus={showOpenSearch}
            leftIcon={<Icon name={'search'} size={20} color="#FE7F63" />}
            icon={
              <Icon
                name={'times'}
                size={20}
                color="#FE7F63"
                onPress={() => {
                  hideOpenSearch();
                }}
              />
            }
          />
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
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    borderRadius: 50,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductContainer;
