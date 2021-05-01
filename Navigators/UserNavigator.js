import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/User/Login';
import Register from '../screens/User/Register';
import UserProfile from '../screens/User/UserProfile';

const stack = createStackNavigator();

function MyStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
}

export default MyStack;
