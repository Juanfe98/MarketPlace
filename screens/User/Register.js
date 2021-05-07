import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Container, Content, Button} from 'native-base';
import Input from '../../shared/Form/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import {axiosInstance} from '../../Axios/axiosInstance';

var logo = require('../../assets/logo_base.png');
// TODO: Agregar validaciones de campos del formulario.
const Register = props => {
  const [userData, setUserData] = useState({
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    street: '',
    streetError: '',
    apartment: '',
    apartmentError: '',
    city: '',
    cityError: '',
    zip: '',
    zipError: '',
    country: '',
    countryError: '',
    phone: '',
    phoneError: '',
  });
  // TODO: Revisar el error handling de la peticion. Como reacciona ante un error
  const register = () => {
    axiosInstance
      .post('users/', userData)
      .then(response => {
        if (response.status == '200') {
          console.log(response.data.msg);
          Toast.show({
            type: 'success',
            position: 'top',
            text1: '¡Éxito!',
            text2: response.data.msg,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
            onPress: () => {
              Toast.hide();
            },
          });
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 500);
        }
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: '¡Error!',
          text2: err.response.data.msg,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onPress: () => {
            Toast.hide();
          },
        });
      });
  };

  return (
    <Container>
      <Content style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} resizeMode="contain" style={styles.logo} />
          <Text style={styles.logoText}>Smart Buy</Text>
        </View>
        <Text style={styles.singInText}>¡Registrate!</Text>
        <View style={styles.formContainer}>
          <Input
            placeholder="Nombre"
            name="name"
            id="name"
            errorMessage={userData.nameError}
            value={userData.name}
            onChangeText={value =>
              setUserData(userData => ({...userData, name: value}))
            }
            icon={<Icon name={'user'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="Correo Electronico"
            name="email"
            id="email"
            errorMessage={userData.emailError}
            value={userData.email}
            onChangeText={value =>
              setUserData(userData => ({...userData, email: value}))
            }
            icon={<Icon name={'envelope'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="Contraseña"
            name="password"
            id="password"
            errorMessage={userData.passwordError}
            value={userData.password}
            onChangeText={value =>
              setUserData(userData => ({...userData, password: value}))
            }
            secureTextEntry={true}
            icon={<Icon name={'key'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="Calle"
            name="street"
            id="street"
            errorMessage={userData.streetError}
            value={userData.street}
            onChangeText={value =>
              setUserData(userData => ({...userData, street: value}))
            }
            icon={<Icon name={'road'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="Apartamento"
            name="apartment"
            id="apartment"
            errorMessage={userData.apartmentError}
            value={userData.apartment}
            onChangeText={value =>
              setUserData(userData => ({...userData, apartment: value}))
            }
            icon={<Icon name={'building'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="Ciudad"
            name="city"
            id="city"
            errorMessage={userData.cityError}
            value={userData.city}
            onChangeText={value =>
              setUserData(userData => ({...userData, city: value}))
            }
            icon={<Icon name={'home'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="Código ZIP"
            name="zip"
            id="zip"
            errorMessage={userData.zipError}
            value={userData.zip}
            onChangeText={value =>
              setUserData(userData => ({...userData, zip: value}))
            }
            icon={<Icon name={'map-marker'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="País"
            name="country"
            id="country"
            errorMessage={userData.countryError}
            value={userData.country}
            onChangeText={value =>
              setUserData(userData => ({...userData, country: value}))
            }
            icon={<Icon name={'globe'} size={20} color="#9085FF" />}
          />
          <Input
            placeholder="Celular"
            name="phone"
            id="phone"
            errorMessage={userData.phoneError}
            value={userData.phone}
            onChangeText={value =>
              setUserData(userData => ({...userData, phone: value}))
            }
            icon={<Icon name={'phone'} size={20} color="#9085FF" />}
          />
        </View>
        <View style={styles.formFooter}>
          <Button
            style={styles.formBtn}
            onPress={() => {
              register();
            }}>
            <Text style={styles.textBtn}>Registrarme</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: '5%',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '30%',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  singInText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  formContainer: {
    margin: 20,
  },
  formFooter: {
    flex: 1,
  },
  formBtn: {
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: '#9085FF',
    borderRadius: 50,
    width: '70%',
    height: 65,
  },
  textBtn: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
  },
});

export default Register;
