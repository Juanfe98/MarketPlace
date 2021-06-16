import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  Button,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Left, Right, Container} from 'native-base';
import Swiper from 'react-native-swiper/src';
import {Appbar} from 'react-native-paper';
import Rating from '../../../../shared/Rating';
import FullWidthButton from '../../../shared/fullWidthButton';
import BottomModal from '../../../shared/Modal/BottomModal';
import {connect} from 'react-redux';
import * as actions from '../../../Redux/Actions/cartActions';

const {width, height} = Dimensions.get('window');

const ProductDetail = props => {
  const [item, setItem] = useState(props.route.params.item);
  const [showQantityModal, setshowQantityModal] = useState(false);
  const [availability, setAvailability] = useState('');
  const temporal_images = [
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg',
  ];

  const qantityModalHandler = () => {
    console.log(
      '🚀 ~ file: ProductDetail.js ~ line 39 ~ qantityModalHandler ~ showQantityModal ~ before',
      showQantityModal,
    );
    setshowQantityModal(false);
  };

  const test = () => {
    setshowQantityModal(!showQantityModal);
  };

  console.log(
    '🚀 ~ file: ProductDetail.js ~ line 47 ~ showQantityModal',
    showQantityModal,
  );
  return (
    <Container style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f8f8f8"
        translucent={true}
      />
      <Appbar.Header style={{backgroundColor: 'transparent', marginTop: 30}}>
        <Appbar.Content
          style={{backgroundColor: 'transparent'}}
          title="Producto"
        />
      </Appbar.Header>
      <ScrollView style={{marginBottom: 40}}>
        <View>
          <Text style={styles.productDescription}>{item.description}</Text>
          <View style={styles.productRate}>
            <Rating
              rate={3}
              backgroundColor="#F5F5F5"
              flexPosition="flex-start"
              imageSize={22}
              readonly
            />
          </View>
        </View>
        <View>
          <Swiper
            showButtons={false}
            autoplay={false}
            style={{height: height / 2}}>
            {temporal_images.map(item => {
              return (
                <Image
                  key={item}
                  source={{uri: item}}
                  style={{
                    height: height / 2,
                    width: width,
                  }}
                />
              );
            })}
          </Swiper>
        </View>
        <View style={styles.productDataContainer}>
          <Text style={styles.price}>$ {item.price}</Text>
          <Text style={styles.stockText}>Cantidad Disponible</Text>
          <FullWidthButton
            mainText="Cantidad: 1"
            secundaryText={`${item.countInStock} Disponibles`}
            onPress={test}
            customStyles={{backgroundColor: '#EBEBEB', marginBottom: 25}}
          />
          <FullWidthButton
            mainText="Comprar ahora"
            onPress={qantityModalHandler}
            customStyles={{backgroundColor: '#7C809B', marginBottom: 10}}
          />
          <FullWidthButton
            mainText="Agregar al carrito"
            onPress={() => {
              props.addItemToCart(item);
            }}
            customStyles={{backgroundColor: '#D1D2DC'}}
          />
        </View>
        <BottomModal visible={showQantityModal} onDismiss={qantityModalHandler}>
          <Text>TEST</Text>
          <Text>TEST</Text>
        </BottomModal>
        {/* TODO: Agregar descripcion, descripcion rica y disponibilidad del producto */}
      </ScrollView>
    </Container>
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
    position: 'relative',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  productDescription: {
    fontSize: 18,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  productRate: {
    margin: 10,
    marginLeft: 15,
  },
  productDataContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  price: {
    fontSize: 28,
    color: 'black',
    marginBottom: 10,
    marginTop: 15,
  },
  stockText: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
  },
});
export default connect(null, mapDispatchToProps)(ProductDetail);
