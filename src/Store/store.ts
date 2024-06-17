import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthApi} from './API/auth.api.ts';
import {authReducer} from './Slices/auth.slice.ts';
import {userReducer} from './Slices/user.slice.ts';
import {orderReducer} from '../Modules/CreateNewOrderModule/Slices/newOrder.slice.ts';
import {OrderApi} from './API/order.api.ts';
import {UserApi} from './API/user.api.ts';

const rootReducer = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  [OrderApi.reducerPath] : OrderApi.reducer,
  [UserApi.reducerPath]: UserApi.reducer,
  authSlice: authReducer,
  userSlice: userReducer,
  orderSlice: orderReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(AuthApi.middleware, OrderApi.middleware, UserApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];