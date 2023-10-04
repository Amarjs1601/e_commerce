import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../common/Button';
import {useDispatch} from 'react-redux';
import {addAddress, updateAddress} from './redux/slices/AddressSlice';
import uuid from 'react-native-uuid';

const AddAddresses = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [type, setType] = useState(
    route.params.type == 'edit'
      ? route.params.data.type == 'Home'
        ? 1
        : 2
      : 1,
  );
  const [state, setState] = useState(
    route.params.type == 'edit' ? route.params.data.state : '',
  );
  const [city, setCity] = useState(
    route.params.type == 'edit' ? route.params.data.city : '',
  );
  const [pincode, setPincode] = useState(
    route.params.type == 'edit' ? route.params.data.pincode : '',
  );

  //   const uuid = uuidv4();
  //   console.log('Generated UUID:', uuid);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={'arrow-left'}
        title={route.params.type == 'edit' ? 'Edit Address' : 'Add New Address'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <TextInput
        style={[styles.input, {marginTop: 50}]}
        placeholder="Enter State"
        value={state}
        onChangeText={txt => {
          setState(txt);
        }}
      />
      <TextInput
        style={[styles.input, {marginTop: 20}]}
        placeholder="Enter City"
        value={city}
        onChangeText={txt => {
          setCity(txt);
        }}
      />
      <TextInput
        style={[styles.input, {marginTop: 20}]}
        keyboardType={'number-pad'}
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={txt => {
          setPincode(txt);
        }}
      />
      <View style={styles.typeView}>
        <TouchableOpacity
          onPress={() => {
            setType(1);
          }}
          style={[
            styles.typeBtn,
            {borderWidth: 1, borderColor: type == 1 ? '#2980b9' : '#000'},
          ]}>
          <Image
            source={
              type == 1
                ? require('../assets/radio_2.png')
                : require('../assets/radio_1.png')
            }
            style={styles.radio}
          />
          <Text style={styles.radioText}>{'Home'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType(2);
          }}
          style={[
            styles.typeBtn,
            {
              borderWidth: 1,
              borderColor: type == 2 ? '#2980b9' : '#000',
            },
          ]}>
          <Image
            source={
              type == 2
                ? require('../assets/radio_2.png')
                : require('../assets/radio_1.png')
            }
            style={styles.radio}
          />
          <Text style={styles.radioText}>{'Office'}</Text>
        </TouchableOpacity>
      </View>
      <Button
        btnwidth={'90%'}
        marginTop={30}
        title={'Save Address'}
        onPress={() => {
          if (route.params.type == 'edit') {
            dispatch(
              updateAddress({
                //   id: new Date(),
                state: state,
                city: city,
                pincode: pincode,
                type: type == 1 ? 'Home' : 'Office',
                id: route.params.data.id,
              }),
              navigation.goBack(),
            );
          } else {
            dispatch(
              addAddress({
                //   id: new Date(),
                state: state,
                city: city,
                pincode: pincode,
                type: type == 1 ? 'Home' : 'Office',
                id: uuid.v4(),
              }),
              navigation.goBack(),
            );
          }
        }}
      />
    </View>
  );
};

export default AddAddresses;

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
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.3,
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  typeView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  typeBtn: {
    width: '40%',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  radio: {
    width: 25,
    height: 25,
  },
  radioText: {
    marginLeft: 10,
    width: '100%',
  },
});
