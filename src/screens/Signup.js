import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Signup'}</Text>
      <TextInput placeholder={'Enter Name'} style={styles.input} />
      <TextInput placeholder={'Enter Email'} style={styles.input} />
      <TextInput placeholder={'Enter Mob'} style={styles.input} />
      <TextInput placeholder={'Enter Password'} style={styles.input} />
      <TextInput placeholder={'Confirm Password'} style={styles.input} />
      <Button
        color={'#0786DAFD'}
        btnwidth={'85%'}
        title={'Sign Up'}
        marginTop={20}
        onPress={() => {}}
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
