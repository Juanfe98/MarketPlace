import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import CartIcon from '../shared/CartIcon';
//Stack
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import UserNavigator from './UserNavigator';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="home"
              style={{position: 'relative'}}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <View>
              <Icon
                name="shopping-cart"
                style={{position: 'relative'}}
                color={color}
                size={30}
              />
              <CartIcon />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Admin"
        component={}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="cog"
              style={{position: 'relative'}}
              color={color}
              size={30}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="user"
              style={{position: 'relative'}}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
