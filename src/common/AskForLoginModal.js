import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AskForLoginModal = ({
  modalVisible,
  onClickLogin,
  onClickSignup,
  onClose,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.modalView}>
        <View style={styles.mainView}>
          <TouchableOpacity onPress={() => onClose()}>
            <Icon name={'close'} size={30} style={styles.closeIcon} />
          </TouchableOpacity>
          <Button
            onPress={() => {
              onClickLogin();
            }}
            title={'Login'}
            btnwidth={'80%'}
            color={'#0786DAFD'}
            marginTop={20}
          />
          <Button
            onPress={() => {
              onClickSignup();
            }}
            title={'Create Account'}
            btnwidth={'80%'}
            color={'#0786DAFD'}
            marginTop={20}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AskForLoginModal;

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: '26%',
    width: '90%',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    right: 20,
    paddingVertical: 10,
  },
});
