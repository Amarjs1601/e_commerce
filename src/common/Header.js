import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('screen');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  const cartItems = useSelector(state => state.cart);
  console.log('ADD_TO_CART ====>', cartItems);

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn}>
        <Icon
          name={leftIcon}
          size={30}
          style={styles.icon}
          onPress={() => {
            onClickLeftIcon();
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <View
          style={{
            height: 16,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff'}}>{cartItems.data.length}</Text>
        </View>
        <Icon
          onPress={() => {
            alert('add items');
          }}
          name={rightIcon}
          size={30}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 65,
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    color: '#fff',
    // backgroundColor: 'blue',
  },
  title: {
    color: '#fff',
    // backgroundColor: 'red',
    fontSize: 20,
    width: '50%',
    textAlign: 'center',
  },
});
