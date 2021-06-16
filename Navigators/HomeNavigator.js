import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductContainer from '../screens/Products/ProductsContainer';
import ProductDetail from '../screens/Products/ProductDetail/ProductDetail';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
