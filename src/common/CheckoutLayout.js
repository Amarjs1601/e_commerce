import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

const CheckoutLayout = ({total, items}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width: '40%'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 13,
            fontWeight: '900',
            color: '#000',
          }}>{`(items ${items})`}</Text>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '900',
            color: '#000',
            fontSize: 16,
          }}>
          {'TOTAL : ₹' + total}
        </Text>
      </View>

      <View style={styles.tab}>
        <Button
          btnwidth={'90%'}
          height={50}
          color={'#0786DAFD'}
          title={'Checkout'}
          onPress={() => navigation.push('Checkout')}
        />
      </View>
    </View>
  );
};

export default CheckoutLayout;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
