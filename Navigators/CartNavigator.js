import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart/Cart';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Product Detail"
        component={ProductDetail}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
