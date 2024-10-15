import { configureStore } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import { userSlice } from './reducer/UserSlice';
import { userApi } from './api/UserApi';

const reducer = combineReducers({
    user: userSlice,
    [userApi.reducerPath]: userApi.reducer
});

const persistConfig : PersistConfig<any>= {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware),
})

export const persistor = persistStore(store);

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch