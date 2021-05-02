import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text, Container, Content, Button} from 'native-base';
import Input from '../../shared/Form/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

var logo = require('../../assets/logo_base.png');
const Login = () => {
  const [{email, emailError}, setEmail] = useState({
    email: '',
    emailError: '',
  });
  const [{password, passwordError}, setPassword] = useState({
    password: '',
    passwordError: '',
  });

  const singIn = () => {
    const email_regex = /\S+@\S+\.\S+/;
    const empty_error = 'Este campo no puede ir vacio';
    !email_regex.test(email) &&
      setEmail({emailError: 'Verifica tu correo electronico'});
    !email && setEmail({emailError: empty_error});
    !password && setPassword({passwordError: empty_error});
    if (!emailError && !passwordError) {
      console.log('Enviamos al backend');
    }
  };

  return (
    <Container>
      <KeyboardAwareScrollView viewIsInsideTabBar={true} enableOnAndroid={true}>
        <Content style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />
            <Text style={styles.logoText}>Smart Buy</Text>
          </View>
          <Text style={styles.singInText}>Inicia Sesión</Text>
          <View style={styles.formContainer}>
            <Input
              placeholder="Correo Electronico"
              name="email"
              id="email"
              errorMessage={emailError}
              value={email}
              onChangeText={value => setEmail({email: value})}
              icon={<Icon name={'envelope'} size={20} color="#9085FF" />}
            />
            <Input
              placeholder="Contraseña"
              name="password"
              id="password"
              errorMessage={passwordError}
              value={password}
              onChangeText={value => setPassword({password: value})}
              secureTextEntry={true}
              icon={<Icon name={'key'} size={20} color="#9085FF" />}
            />
          </View>
          <View style={styles.formFooter}>
            <Button
              style={styles.formBtn}
              onPress={() => {
                singIn();
              }}>
              <Text style={styles.textBtn}>Iniciar Sesión</Text>
            </Button>
            <TouchableOpacity
              onPress={() => {
                console.log('Forgot Pressed');
              }}>
              <Text style={styles.forgotBtn}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          </View>
        </Content>
        <Text style={styles.registerBtn}>
          ¿No tienes cuenta?
          <Text
            onPress={() => {
              console.log('Register Pressed');
            }}
            style={{color: 'blue'}}>
            Registrate !
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    marginTop: '20%',
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
    marginTop: '20%',
    backgroundColor: '#9085FF',
    borderRadius: 50,
    width: '70%',
    height: '30%',
  },
  textBtn: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
  },
  forgotBtn: {
    margin: '8%',
    alignSelf: 'center',
    color: 'blue',
  },
  registerBtn: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});

export default Login;
