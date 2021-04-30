import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Header, Body, Title} from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
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
  const [country, setCountry] = useState('CO');
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);
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

    props.navigation.navigate('Pago', {order});
  };

  return (
    <>
      <Header>
        <Body>
          <Title style={{alignSelf: 'center', alignContent: 'center'}}>
            Diligencia tu información
          </Title>
        </Body>
      </Header>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}
        style={styles.container}>
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
        {/* TODO: Agregar un dropdown picker que funcione */}
        {/* <DropDownPicker
          autoScrollToDefaultValue
          containerStyle={{
            height: 50,
            width: '95%',
            borderBottomWidth: 2,
            borderBottomColor: '#EBEBEB',
            marginLeft: 15,
            marginTop: 20,
          }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          style={{borderWidth: 0}}
          items={countries}
          placeholder="SELECCIONA TÚ PAÍS"
          onChangeItem={item => {
            setCountry(item.value);
          }}
        /> */}
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            onPress={() => {
              proceeed();
            }}>
            <Text style={{color: 'white'}}>Continuar</Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  title: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  btnContainer: {
    alignSelf: 'center',
    marginTop: 100,
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
