import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    try {
      firestore()
        .collection('Users')
        // Filter results
        .where('email', '==', email)
        .get()
        .then(res => {
          if (res.docs != []) {
            goToNext(
              res.docs[0].data().email,
              res.docs[0].data().password,
              res.docs[0].data().userID,
            );
          } else {
            console.log('USER NOT FOUND!!');
          }
        });
    } catch (error) {
      console.log('user NOt exist !!');
    }
  };

  const goToNext = async (email, password, userID) => {
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    await AsyncStorage.setItem('USERID', userID);
    navigation.navigate('Main');
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{'Login'}</Text>

        <TextInput
          placeholder={'Enter Email'}
          style={styles.input}
          onChangeText={txt => setEmail(txt)}
          value={email}
        />

        <TextInput
          placeholder={'Enter Password'}
          style={styles.input}
          onChangeText={txt => setPassword(txt)}
          value={password}
        />

        <Button
          color={'#0786DAFD'}
          btnwidth={'85%'}
          title={'Log In'}
          marginTop={20}
          onPress={() => {
            loginUser();
            // navigation.navigate('User');
          }}
        />

        <Text
          // onPress={() => {
          //   navigation.navigate('Signup');
          // }}
          style={styles.loginText}>
          {'Sign up'}{' '}
        </Text>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 40,
    marginTop: '27%',
    marginLeft: 20,
  },
  input: {
    width: '85%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  loginText: {
    // alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    width: '100%',
    textDecorationLine: 'underline',
  },
});
