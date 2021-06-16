import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  StatusBar,
  Dimensions,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container} from 'native-base';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import CategoriesFilter from './Categories/CategoriesFilter';
import Banner from '../../shared/Banner';
import Loader from '../../shared/Loader';
import NoProducts from '../../assets/undraw_empty.svg';
import Input from '../../shared/Form/Input';
import {axiosInstance} from '../../Axios/axiosInstance';
import productsOffline from '../../assets/products.json';

const ProductContainer = props => {
  const {width, height} = Dimensions.get('window');

  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState('');
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
        setProducts(productsOffline);
        setProductsFilter(productsOffline);
        setInitialState(productsOffline);
        setProductsCtg(productsOffline);
        setLoader(false);
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
    setProductsFilter(products);
  };

  const hideOpenSearch = () => {
    setInputSearchValue('');
    Keyboard.dismiss();
    setOpenSearch(false);
  };

  const filterProducts = text => {
    setInputSearchValue(text);
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
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f8f8f8"
        translucent={true}
      />
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
            value={inputSearchValue}
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
              hideOpenSearch={hideOpenSearch}
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
                <View style={[styles.center, {marginTop: 60}]}>
                  <Text style={styles.noProductsText}>Oops!</Text>
                  <Text style={styles.noProductsText}>
                    No encontramos productos
                  </Text>
                  <NoProducts width={width - 40} height={height / 2} />
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
    marginTop: '3%',
  },
  searchBarContainer: {
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    borderRadius: 50,
  },
  noProductsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProductContainer;
