import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../common/Header';

const User = () => {
  return (
    <View style={styles.container}>
      <Header title={'Profile'} />
      <Image style={styles.user} source={require('../assets/profile.png')} />
      <Text style={styles.name}>{'Amardeep Sen'}</Text>
      <Text style={[styles.name, {fontSize: 16}]}>
        {'AmardeepSen98@gmail.com'}
      </Text>
      <TouchableOpacity style={[styles.tab, {marginTop: 40}]}>
        <Text style={styles.txt}>{'Edit Profile'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <Text style={styles.txt}>{'Orders'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <Text style={styles.txt}>{'Address'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, , {marginTop: 10}]}>
        <Text style={styles.txt}>{'Payment Methods'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, , {marginTop: 10}]}>
        <Text style={styles.txt}>{'Logout'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  user: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  name: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    color: '#000',
  },
  tab: {
    width: '95%',
    height: 40,
    marginLeft: 20,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    borderBottomColor: '#DBDBDB',
    // marginTop: 30,
  },
  txt: {
    color: '#000',
  },
});
