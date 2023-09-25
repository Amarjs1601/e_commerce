import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemsCart,
  reduceItemsFromCart,
  removeItemsFromCart,
} from './redux/slices/CartSlice';
import Button from '../common/Button';

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

const Checkout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const [cartItem, setCartItem] = useState([]);
  const [selectMethod, setSelectMethod] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(
    'Please Select Address',
  );

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
        leftIcon={'arrow-left'}
        onClickLeftIcon={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.title}>{'Added Items'}</Text>
        <View>
          <FlatList
            data={cartItem}
            renderItem={({item}) => <RenderItem item={item} />}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={styles.totalView}>
          <Text style={styles.title}>Total</Text>
          <Text style={[styles.title, {marginRight: 20}]}>
            {'₹' + getTotal()}
          </Text>
        </View>
        <Text style={styles.title}>Select Payment Mode</Text>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => setSelectMethod(0)}>
          <Image
            source={
              selectMethod == 0
                ? require('../assets/radio_2.png')
                : require('../assets/radio_1.png')
            }
            style={[
              styles.img,
              {tintColor: selectMethod == 0 ? 'blue' : 'black'},
            ]}
          />
          <Text style={styles.paymentMethodsTxt}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => setSelectMethod(1)}>
          <Image
            source={
              selectMethod == 1
                ? require('../assets/radio_2.png')
                : require('../assets/radio_1.png')
            }
            style={[
              styles.img,
              {tintColor: selectMethod == 1 ? 'blue' : 'black'},
            ]}
          />
          <Text style={styles.paymentMethodsTxt}>Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => setSelectMethod(2)}>
          <Image
            source={
              selectMethod == 2
                ? require('../assets/radio_2.png')
                : require('../assets/radio_1.png')
            }
            style={[
              styles.img,
              {tintColor: selectMethod == 2 ? 'blue' : 'black'},
            ]}
          />
          <Text style={styles.paymentMethodsTxt}>Upi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => setSelectMethod(3)}>
          <Image
            source={
              selectMethod == 3
                ? require('../assets/radio_2.png')
                : require('../assets/radio_1.png')
            }
            style={[
              styles.img,
              {tintColor: selectMethod == 3 ? 'blue' : 'black'},
            ]}
          />
          <Text style={styles.paymentMethodsTxt}>Pay on Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>Address</Text>
          <Text
            style={[
              styles.title,
              {marginTop: 10, fontSize: 16, color: '#636363'},
            ]}>
            {selectedAddress}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <Button
          btnwidth={'90%'}
          marginTop={'20%'}
          title={'Pay & Order'}
          color={'blue'}
        />
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 30,
    color: '#000',
    fontWeight: '900',
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
  totalView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    height: 70,
    flexDirection: 'row',
    borderBottomColor: '#B7B7B7',
  },
  paymentMethods: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
  },
  img: {
    width: 24,
    height: 24,
  },
  paymentMethodsTxt: {
    width: '100%',
    marginLeft: 20,
    fontSize: 15,
    color: '#000',
  },
});
