import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Button from '../common/Button';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteAddress} from './redux/slices/AddressSlice';

const Addresses = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addressList = useSelector(state => state.address);
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('ADDRESS-LIST', addressList);
  }, [isFocused]);

  const defaultAddress = async item => {
    // console.log('ITEM---------->', item);
    await AsyncStorage.setItem('MY_ADDRESS', JSON.stringify(item));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={'arrow-left'}
        title={'My Addresses'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <FlatList
        data={addressList.data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: '90%',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                paddingLeft: 20,
                paddingBottom: 20,
                paddingTop: 20,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
              }}
              onPress={() => {
                defaultAddress(item);
              }}>
              <Text style={{color: '#000'}}>{`State : ${item.state}`}</Text>
              <Text style={{color: '#000'}}>{`City : ${item.city}`}</Text>
              <Text style={{color: '#000'}}>{`Pincode : ${item.pincode}`}</Text>
              <Text
                style={{
                  color: '#fff',
                  position: 'absolute',
                  right: 4,
                  top: 10,
                  // width: '16%',

                  textAlign: 'right',
                  fontSize: 11,
                  backgroundColor: '#2980b9',
                  padding: 9,
                  borderRadius: 10,
                  fontWeight: '900',
                }}>
                {item.type}
              </Text>
              <View style={styles.bottomView}>
                <TouchableOpacity
                  style={[styles.bottomIcon, {marginRight: 10}]}
                  onPress={() => {
                    navigation.navigate('AddAddresses', {
                      type: 'edit',
                      data: item,
                    });
                  }}>
                  <Image
                    source={require('../assets/edit.png')}
                    style={styles.bottomIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bottomIcon}
                  onPress={() => {
                    dispatch(deleteAddress(item.id));
                  }}>
                  <Image
                    source={require('../assets/delete.png')}
                    style={styles.bottomIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
        // keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text
          style={{fontSize: 28, color: '#fff'}}
          onPress={() => {
            navigation.navigate('AddAddresses', {type: 'new'});
          }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#2980b9',
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    position: 'absolute',
    right: 10,
    bottom: 15,
    flexDirection: 'row',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
});
