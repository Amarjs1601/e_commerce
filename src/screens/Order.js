import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../common/Header';
import {useSelector} from 'react-redux';

const Order = ({navigation}) => {
  const orderList = useSelector(state => state.order);
  //   console.log('ORDER-LIST--------------->', orderList.data);
  return (
    <View style={styles.container}>
      <Header
        title={'Orders List'}
        leftIcon={'arrow-left'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        data={orderList.data}
        renderItem={({item, index}) => {
          console.log('RENDERITEMS--------------------->', item);
          return (
            <View style={styles.orderItems}>
              <FlatList
                data={item.items}
                renderItem={({item, index}) => {
                  console.log('SECONDRENDERITEMS----------->', item);

                  return (
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.itemImage}
                        resizeMode="contain"
                      />
                      <View
                        style={[
                          styles.productItems,
                          {width: 280, marginLeft: 10},
                        ]}>
                        <Text style={{width: '100%'}}>
                          {item.title.length > 25
                            ? item.title.substring(0, 25)
                            : item.title}
                        </Text>
                        <Text>
                          {item.description.length > 35
                            ? item.description.substring(0, 35)
                            : item.description}
                        </Text>
                        <Text style={{color: '#2980b9'}}>
                          {'₹' + item.price}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  orderItems: {
    width: '90%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    borderWidth: 0.8,
    padding: 10,
    borderRadius: 10,
    borderColor: '#2980b9',
    marginTop: 20,
    alignSelf: 'center',
  },
  productItems: {
    width: 95,
    height: 30,
    // backgroundColor: '#000',
  },
  itemImage: {
    width: 70,
    height: 70,
  },
  mainView: {
    marginLeft: 10,
  },
});
