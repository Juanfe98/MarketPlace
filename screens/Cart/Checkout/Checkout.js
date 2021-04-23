import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormContainer from '../../../shared/Form/FormContainer';
import Input from '../../../shared/Form/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {connect} from 'react-redux';

const countries = require('../../../assets/countries.json');

function Checkout(props) {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);
    console.log(props.cartItems);
    return () => {
      setOrderItems([]);
    };
  }, []);

  const proceeed = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    };

    props.navigation.navigate('Payment', {order});
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}>
      <FormContainer title={'Datos de Envío'}>
        <Input
          placeholder={'Celular'}
          name={'phone'}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={value => setPhone(value)}
        />
        <Input
          placeholder={'Dirección de Envio 1'}
          name={'ShippingAddress1'}
          value={address}
          onChangeText={value => setAddress(value)}
        />
        <Input
          placeholder={'Dirección de Envio 2'}
          name={'ShippingAddress2'}
          value={address2}
          onChangeText={value => setAddress2(value)}
        />
        <Input
          placeholder={'Ciudad'}
          name={'city'}
          value={city}
          onChangeText={value => setCity(value)}
        />
        <Input
          placeholder={'ZIP'}
          name={'zip'}
          value={zip}
          keyboardType={'numeric'}
          onChangeText={value => setZip(value)}
        />
        {/* TODO: Reemplazar Picker, se genera error al clickear sobre cualquier parte de el que no sea el icono arrow y no toma el placeholder pero sino se cambia no toma valor al enviar el formulario */}
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" color="#007aff" />}
          dropdownIconColor="#007aff"
          style={{width: '80%'}}
          selectedValue={country}
          placeholder="Select your country"
          placeholderStyle={{color: '#007aff'}}
          placeholderIconColor="#007aff"
          onValueChange={value => setCountry(value)}>
          {countries.map(country => {
            return (
              <Picker.Item
                color="#007aff"
                key={country.code}
                label={country.name}
                value={country.name}
              />
            );
          })}
        </Picker>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            onPress={() => {
              proceeed();
            }}>
            <Text style={{color: 'white'}}>Continuar</Text>
          </Button>
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
}

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  btnContainer: {
    alignSelf: 'center',
  },
  btn: {
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'green',
    marginTop: 30,
    elevation: 40,
  },
});

export default connect(mapStateToProps)(Checkout);
