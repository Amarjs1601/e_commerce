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
import {
  addItemsCart,
  reduceItemsFromCart,
  removeItemsFromCart,
} from './redux/slices/CartSlice';

const RenderItem = ({item, index}) => {
  const dispatch = useDispatch();
  // console.log('RENDER--ITEMS-DATA------->', item);

  return (
    <View style={{padding: 10, width: '100%'}}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.productsItem}
        onPress={() => {
          //   navigation.navigate('ProductDetails', {data: item});
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
  const cartItems = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  // console.log('CART-ITEMS====>', cartItems.data);
  // console.log(
  //   JSON.stringify(cartItems) + ' ' + cartItems.data.length,
  // );
  useEffect(() => {
    setCartItem(cartItems.data);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <Header title={'Cart Items'} />
      <FlatList
        data={cartItem}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});
