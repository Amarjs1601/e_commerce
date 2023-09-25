import {ViewView, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Main from './screens/Main';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Wishlist from './tabs/Wishlist';
import Login from './screens/Login';
import Signup from './screens/Signup';
import User from './tabs/User';
import Splash from './screens/Splash';
import Checkout from './screens/Checkout';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="User"
          component={User}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
