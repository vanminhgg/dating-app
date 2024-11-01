import { configureStore, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import { userApi } from './api/UserApi';
import { userReducer } from './reducer/UserSlice';
import { loadingReducer } from './reducer/LoadingSlice';

const reducer = combineReducers({
    user: userReducer,
    isLoading: loadingReducer,
    [userApi.reducerPath]: userApi.reducer
});

const persistConfig : PersistConfig<any>= {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<any, PayloadAction<{user: any, token: string}>>(persistConfig, reducer)

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