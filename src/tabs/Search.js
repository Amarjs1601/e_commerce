import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Header from '../common/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const products = useSelector(state => state);
  // console.log('first----------->', products.product.data);
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState(oldData);
  // console.log('olddata============>', oldData);
  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    // console.log('FILTER_DATA------------>', newData);
    setSearchedList(newData);
  };

  return (
    <View style={styles.container}>
      <Header title={'Search Products'} />
      <View style={styles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={'search'} size={30} style={styles.searchIconStyle} />
          <TextInput
            value={search}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            placeholder="Search Items Here..."
            style={styles.textInput}
          />
        </View>
        {search !== '' && (
          <TouchableOpacity
            style={[
              styles.icon,
              {
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Icon
              onPress={() => {
                setSearch('');
                filterData('');
              }}
              name={'close'}
              size={30}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{marginTop: 20}}>
        <FlatList
          data={searchedList}
          renderItem={({item, index}) => {
            return (
              <View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.productsItem}
                  onPress={() => {
                    navigation.navigate('ProductDetails', {data: item});
                  }}>
                  <Image
                    resizeMode="contain"
                    source={{uri: item.image}}
                    style={styles.productsImage}
                  />
                  <View>
                    <Text
                      numberOfLines={2}
                      style={{
                        width: '30%',
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#000',
                      }}>
                      {/* {item.title.length > 30
                      ? item.title.substring(0, 30) + '...'
                      : item.title} */}
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{
                        width: '20%',
                        // fontSize: 12,
                      }}>
                      {/* {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    :  */}
                      {/* // } */}
                      {item.description}
                    </Text>
                    <Text style={styles.price}>{'₹' + item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchView: {
    borderWidth: 0.5,
    width: '90%',
    borderRadius: 20,
    height: 50,
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  searchIconStyle: {
    // alignSelf: 'center',
    fontWeight: '600',
    color: '#000',
  },
  textInput: {
    width: '80%',
    textAlign: 'center',
    marginLeft: 10,
  },
  closeIcon: {
    fontWeight: '600',
    color: '#000',
  },
  icon: {},
  productsItem: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  productsImage: {
    width: 100,
    height: 100,
  },

  price: {color: '#27ae60'},
});
