import { combineReducers, configureStore } from '@reduxjs/toolkit'; // Correct import statement
import userReducer from './user/userSlice';
import {persistReducer,persistStore} from 'redux-persist'
import storage  from 'redux-persist/lib/storage';


const rootReducer = combineReducers({user:userReducer})
const persistconfig = {
  key: 'root',
  version:1,
  storage,
}
const persistedReducer = persistReducer(persistconfig , rootReducer)
export const store = configureStore({
  reducer:persistedReducer ,
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store)