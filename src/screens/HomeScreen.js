import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import AN from 'react-native-vector-icons/AntDesign';
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Wishlist from '../tabs/Wishlist';
import Notification from '../tabs/Notification';
import User from '../tabs/User';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false); // or some other action
      },
    );
  }, []);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishlist />
      ) : selectedTab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}
      {!isKeyboardVisible && (
        <View style={styles.bottomView}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(0);
            }}>
            <AN
              name="home"
              size={30}
              style={{color: selectedTab == 0 ? '#000' : '#8e8e8e'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(1);
            }}>
            <SearchIcon
              name="search"
              size={30}
              style={{color: selectedTab == 1 ? '#000' : '#8e8e8e'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Icon
              name="cards-heart-outline"
              size={31}
              style={{color: selectedTab == 2 ? '#000' : '#8e8e8e'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(3);
            }}>
            <Icon
              name="bell-outline"
              size={31}
              style={{color: selectedTab == 3 ? '#000' : '#8e8e8e'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(4);
            }}>
            <AN
              name="user"
              size={30}
              style={{color: selectedTab == 4 ? '#000' : '#8e8e8e'}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  // bottomTabIcon: selectedTab == 1 ? '#8e8e8e' : '#fff',
  bottomTabCardHeartIcon: {
    color: '#000',
  },
});
