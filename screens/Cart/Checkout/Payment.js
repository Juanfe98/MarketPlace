import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Content,
  Container,
  Picker,
  ListItem,
  Header,
  Body,
  Title,
  Left,
  Radio,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const paymentTypes = [
  {name: 'Efectivo', value: 1},
  {name: 'Transferencia Bancaria', value: 2},
  {name: 'Tarjeta de Crédito', value: 3},
];

const creditCards = [
  {name: 'Master Card', value: 1},
  {name: 'Visa', value: 2},
  {name: 'Otra', value: 3},
];

function Payment(props) {
  const order = props.route.params;
  const [payment, setPayment] = React.useState(0);
  const [creditCard, setCreditCard] = React.useState(0);
  return (
    <Container>
      <Header>
        <Body>
          <Title style={styles.title}>Escoge tu método de pago</Title>
        </Body>
      </Header>
      <Content>
        {paymentTypes.map(paymentType => {
          return (
            <ListItem
              key={paymentType.value}
              onPress={() => {
                setPayment(paymentType.value);
              }}>
              <Left>
                <Text>{paymentType.name}</Text>
              </Left>
              <Radio selected={payment == paymentType.value} />
            </ListItem>
          );
        })}

        {payment == 3 && (
          <Picker
            mode="dropdown"
            iosIcon={<Icon name={'arrow-down'} />}
            dropdownIconColor="#007aff"
            headerStyle={{backgroundColor: 'orange'}}
            style={{width: '100%'}}
            selectedValue={creditCard}
            headerBackButtonTextStyle={{color: '#fff'}}
            headerTitleStyle={{color: '#fff'}}
            onValueChange={value => setCreditCard(value)}>
            {creditCards.map(creditCard => {
              return (
                <Picker.Item
                  key={creditCard.value}
                  value={creditCard.value}
                  label={creditCard.name}
                />
              );
            })}
          </Picker>
        )}
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            onPress={() => {
              props.navigation.navigate('Confirm', {order});
            }}>
            <Text style={{color: 'white'}}>Continuar</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

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

export default Payment;
