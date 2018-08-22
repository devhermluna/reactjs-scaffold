import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import './assets/css/Styles.css';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
};
