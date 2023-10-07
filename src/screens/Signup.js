import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
const Signup = () => {
  const navigation = useNavigation();
  const userID = uuid.v4();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const addUser = () => {
    firestore()
      .collection('Users')
      .doc(userID)
      .set({
        name: name,
        email: email,
        mobile: mobile,
        password: password,
        confirmPassword: confirmPassword,
        userID: userID,
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Login');
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Signup'}</Text>
      <TextInput
        placeholder={'Enter Name'}
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder={'Enter Email'}
        style={styles.input}
        value={email}
        onChangeText={txt => setEmail(txt)}
      />
      <TextInput
        placeholder={'Enter Mob'}
        style={styles.input}
        value={mobile}
        onChangeText={txt => setMobile(txt)}
      />
      <TextInput
        placeholder={'Enter Password'}
        style={styles.input}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TextInput
        placeholder={'Confirm Password'}
        style={styles.input}
        value={confirmPassword}
        onChangeText={txt => setConfirmPassword(txt)}
      />
      <Button
        color={'#0786DAFD'}
        btnwidth={'85%'}
        title={'Sign Up'}
        marginTop={20}
        onPress={() => {
          addUser();
        }}
      />

      <Text
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.loginText}>
        {'Login'}{' '}
      </Text>
    </View>
  );
};

export default Signup;

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
