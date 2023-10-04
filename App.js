import {View, Text, LogBox} from 'react-native';
import React from 'react';
import AppNavigation from './src/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './src/screens/redux/store/Store';
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
