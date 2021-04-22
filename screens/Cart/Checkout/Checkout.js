import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {Item, Picker} from 'native-base';
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
    return () => {
      setOrderItems([]);
    };
  }, []);

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

export default connect(mapStateToProps)(Checkout);
