import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../common/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  addItemsCart,
  reduceItemsFromCart,
  removeItemsFromCart,
} from './redux/slices/CartSlice';
import {useNavigation} from '@react-navigation/native';
import CheckoutLayout from '../common/CheckoutLayout';

const RenderItem = ({item, index}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // console.log('RENDER--ITEMS-DATA------->', item);

  return (
    <View style={{padding: 10, width: '100%'}}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.productsItem}
        onPress={() => {
          navigation.push('ProductDetails', {data: item});
        }}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.productsImage}
        />
        <View>
          <Text
            numberOfLines={2}
            style={{
              width: '30%',
              fontSize: 15,
              fontWeight: 600,
              color: '#000',
            }}>
            {/* {item.title.length > 30
                ? item.title.substring(0, 30) + '...'
                : item.title} */}
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            style={
              {
                //   width: '20%',
                // fontSize: 12,
              }
            }>
            {/* {item.description.length > 30
              ? item.description.substring(0, 30) + '...'
              :  */}
            {/* // } */}
            {item.description}
          </Text>
          <View
            style={{
              ...styles.qtyView,
              //   backgroundColor: 'red',
              width: 350,
              marginTop: '1%',
            }}>
            <Text style={{...styles.price}}>{'₹' + item.price}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (item.qty > 1) {
                  dispatch(reduceItemsFromCart(item));
                } else dispatch(removeItemsFromCart(index));
              }}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{marginLeft: 0}}>{item.qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                dispatch(addItemsCart(item));
              }}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Cart = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  // console.log('CART-ITEMS====>', cartItems.data);
  // console.log(
  //   JSON.stringify(cartItems) + ' ' + cartItems.data.length,
  // );
  useEffect(() => {
    setCartItem(cartItems.data);
  }, [cartItems]);

  const getTotal = () => {
    let total = 0;
    cartItem.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(1);
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Cart Items'}
        leftIcon={'arrow-left'}
        onClickLeftIcon={() => {
          navigation.goBack('Home');
        }}
      />
      <FlatList
        data={cartItem}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={(item, index) => index}
      />
      {cartItem.length < 1 && (
        <View style={styles.noItems}>
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '900',
              color: '#000',
            }}>
            {'No Items In Cart'}
          </Text>
        </View>
      )}
      {cartItem.length > 0 && (
        <CheckoutLayout items={cartItem.length} total={getTotal()} />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    // width: '100%',
  },
  productsItem: {
    // width: '100%',
    // height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  productsImage: {
    width: 100,
    height: 100,
  },

  price: {color: '#27ae60', width: '50%'},
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-start',
  },
  btn: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,

    // backgroundColor: 'red',
  },
  noItems: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
