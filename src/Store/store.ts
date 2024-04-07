import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthApi} from './API/auth.api.ts';
import {authReducer} from './Slices/auth.slice.ts';

const rootReducer = combineReducers({
  [AuthApi.reducerPath]: AuthApi.reducer,
  authSlice: authReducer
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