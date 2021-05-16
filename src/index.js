/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { combineReducers, createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './redux/reducers/user';
import Home from './components/Home';

const rootReducer = combineReducers({
  userData: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  </ChakraProvider>,
  document.getElementById('app'),
);
