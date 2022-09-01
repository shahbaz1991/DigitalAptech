import React from "react";
import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';
import { Provider } from "react-redux";
// import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
// import store from "@store/configureStore";
import AsyncStorage from '@react-native-community/async-storage';
// import storage from 'redux-persist/lib/storage'
import { createStore } from "redux";
import reduxReducer from "./src/redux/reducer";

// const persistConfig = {
//     key: 'root',
//     storage,
//   }
// const persistedReducer = persistReducer(persistConfig)
const configureStore = ()=>createStore(reduxReducer)
const store = configureStore()
// const persistor = persistStore(store);

const Root = () => (
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
