import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthApi} from './API/auth.api.ts';
import {authReducer} from './Slices/auth.slice.ts';
import {userReducer} from './Slices/user.slice.ts';
import {orderReducer} from '../Modules/CreateNewOrderModule/Slices/newOrder.slice.ts';

const rootReducer = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  authSlice: authReducer,
  userSlice: userReducer,
  orderSlice: orderReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(AuthApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];