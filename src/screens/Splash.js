import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Just Shopping</Text>
      <Image source={require('../assets/search.png')} style={styles.img} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a29bfe',
  },
  img: {
    width: 300,
    height: 300,
  },
  txt: {
    width: '100%',
    textAlign: 'center',
    marginTop: '15%',
    fontSize: 45,
    fontWeight: '800',
    color: '#000',
    fontStyle: 'italic',
  },
});
