import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

const OrderSuccess = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/checked.png')}
        style={styles.SuccessIcon}
      />
      <Text style={styles.msg}>Order Placed Successfully...</Text>
      {/* <Text style={styles.btn}>Go To Home</Text> */}
      <Button
        title={'Go To Home'}
        marginTop={10}
        onPress={() => {
          props.navigation.navigate('Main');
        }}
      />
    </View>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  SuccessIcon: {
    width: 100,
    height: 100,
  },
  msg: {
    marginTop: 20,
    color: '#000',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
});
