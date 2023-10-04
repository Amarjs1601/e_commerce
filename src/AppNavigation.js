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
import Addresses from './screens/Addresses';
import AddAddresses from './screens/AddAddresses';
import Home from './tabs/Home';
import OrderSuccess from './screens/OrderSuccess';
import Order from './screens/Order';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name="Addresses"
          component={Addresses}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="AddAddresses"
          component={AddAddresses}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}></Stack.Screen>
        {/* <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{headerShown: false}}></Stack.Screen> */}
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
