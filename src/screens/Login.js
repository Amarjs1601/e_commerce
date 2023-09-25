import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs[0]._data);
      });
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
          onPress={() => {
            navigation.navigate('Signup');
          }}
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
