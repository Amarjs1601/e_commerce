import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../common/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addProducts} from '../screens/redux/slices/ProductsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [products, setProdducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProdducts(json);
        json.map(item => {
          item.qty = 1;
        });
        dispatch(addProducts(json));
        // console.log('xxxxxxxxxxxxxxxxxxx', json);
      });
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'menu'}
        rightIcon={'cart-outline'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        title={'E-Commerce App'}
      />
      <View style={{marginBottom: 130}}>
        <FlatList
          data={products}
          renderItem={({item, index}) => {
            console.log('products______Data', item);
            return (
              <TouchableOpacity
                activeOpacity={1}
                style={styles.productsItem}
                onPress={() => {
                  navigation.navigate('ProductDetails', {data: item});
                }}>
                <Image
                  resizeMode="contain"
                  source={{uri: item.image}}
                  style={styles.productsImage}
                />
                <View>
                  <Text
                    numberOfLines={1}
                    style={{
                      width: '50%',
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
                    numberOfLines={1}
                    style={{
                      width: Dimensions.get('screen').width * 0.6,
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
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
