import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../common/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const RenderItem = ({item}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.productsItem}
        onPress={() => {
          //navigation.navigate('ProductDetails', {data: item});
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
            style={{
              width: '20%',
              // fontSize: 12,
            }}>
            {/* {item.description.length > 30
            ? item.description.substring(0, 30) + '...'
            :  */}
            {/* // } */}
            {item.description}
          </Text>
          <Text style={styles.price}>{'₹' + item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Wishlist = () => {
  const navigation = useNavigation();
  const addWishListProducts = useSelector(state => state.wishlist);
  // const [wishList, setWishList] = useState(addWishListProducts.data);
  console.log('aaaaaaaaaaaaaaaaaaaaaa', addWishListProducts.data);
  // console.log(
  //   JSON.stringify(addWishListProducts) + ' ' + addWishListProducts.data.length,
  // );
  return (
    <View style={styles.container}>
      <Header
        title={'WishList Items'}
        rightIcon={'cart'}
        leftIcon={'arrow-left'}
        // onClickLeftIcon={() => navigation.goBack('Home')}
      />
      <FlatList
        data={addWishListProducts.data}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productsItem: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  productsImage: {
    width: 100,
    height: 100,
  },

  price: {color: '#27ae60'},
});
