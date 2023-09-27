import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../common/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {addItemsWishList} from './redux/slices/WishList';
import {addItemsCart} from './redux/slices/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AskForLoginModal from '../common/AskForLoginModal';

const ProductDetails = props => {
  const [selectHeart, setSelectHeart] = useState(false);
  const [qty, setQty] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  // console.log('props', props);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const handleWishlist = () => {
    setSelectHeart(!selectHeart);
  };

  const checkUserStatus = async () => {
    let isUserLoggedIn = false;
    const status = await AsyncStorage.getItem('IS_USER_LOGGED_IN');
    if (status == null) {
      isUserLoggedIn = false;
      // Alert.alert('Please Log In');
    } else {
      isUserLoggedIn = true;
    }
    return isUserLoggedIn;
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'arrow-left'}
        isCart={true}
        rightIcon={'cart'}
        title={'Product-Details'}
        onClickLeftIcon={() => {
          navigation.goBack('Home');
        }}
      />
      <View
        style={{
          width: '95%',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignSelf: 'center'}}>
            <Image
              resizeMode="contain"
              source={{uri: route.params.data.image}}
              style={styles.banner}
            />
          </View>
          <Text style={styles.title}>{route.params.data.title}</Text>
          <Text numberOfLines={5} style={styles.description}>
            {route.params.data.description}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignSelf: 'flex-start',
              marginBottom: 150,
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                color: '#000',
                marginLeft: '6%',
              }}>
              {'Price :'}
            </Text>
            <Text style={styles.price}>
              {/* {'Price' + ' : ' + '$' + route.params.data.price} */}
              {`₹${route.params.data.price}`}
            </Text>
            <View style={styles.qtyBtn}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  if (qty > 1) {
                    setQty(qty - 1);
                  }
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#000',
                    textAlign: 'center',
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#000',
                  alignSelf: 'center',
                }}>
                {qty}
              </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setQty(qty + 1);
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#000',
                    textAlign: 'center',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <AskForLoginModal
          modalVisible={modalVisible}
          onClickLogin={() => {
            setModalVisible(false);
            navigation.navigate('Login');
          }}
          onClose={() => {
            setModalVisible(false);
          }}
          onClickSignup={() => {
            setModalVisible(false);
            navigation.navigate('Signup');
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.icon_heart}
        onPress={() => {
          handleWishlist();
          dispatch(addItemsWishList(route.params.data));
          // if (checkUserStatus() === true) {
          //   dispatch(addItemsWishList(route.params.data));
          // } else {
          //   setModalVisible(true);
          // }
        }}>
        <Icon
          name={selectHeart ? 'cards-heart' : 'cards-heart-outline'}
          size={25}
          style={{color: selectHeart ? 'red' : '#000'}}
        />
      </TouchableOpacity>

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '95%',
          alignSelf: 'center',
        }}>
        <Button
          height={50}
          btnwidth={'95%'}
          color={'#0984e3'}
          title={'Add To Cart'}
          onPress={() => {
            //    console.log('CHECK_DATA', route.params.data);
            dispatch(addItemsCart(route.params.data));
            // if (checkUserStatus() === true) {
            //   dispatch(
            //     addItemsCart({
            //       category: route.params.data.category,
            //       description: route.params.data.description,
            //       id: route.params.data.id,
            //       image: route.params.data.image,
            //       price: route.params.data.price,
            //       qty: qty,
            //       rating: route.params.data.rating,
            //       title: route.params.data.title,
            //     }),
            //   );
            // } else {
            //   setModalVisible(true);
            // }
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginLeft: 13,
    marginTop: 10,
  },
  description: {
    width: '90%',
    fontSize: 15,
    // color: '#000',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  price: {
    color: '#27ae60',
    marginLeft: 20,
    // marginTop: 20,
    fontSize: 22,
    fontWeight: '600',
  },
  icon_heart: {
    position: 'absolute',
    right: 20,
    top: 80,
    fontWeight: '600',
  },
  qtyBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%',
    height: 43,
  },
  btn: {
    padding: 7,
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    width: 30,

    // backgroundColor: 'red',
  },
});
