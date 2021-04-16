import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart/Cart';
import CheckoutNavigator from './CheckoutNavigator';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Shipping"
        component={CheckoutNavigator}
        options={{title: 'Checkout'}}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
