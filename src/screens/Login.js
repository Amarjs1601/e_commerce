import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Login'}</Text>

      <TextInput placeholder={'Enter Email'} style={styles.input} />

      <TextInput placeholder={'Enter Password'} style={styles.input} />

      <Button
        color={'#0786DAFD'}
        btnwidth={'85%'}
        title={'Log In'}
        marginTop={20}
        onPress={() => {
          navigation.navigate('User');
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
