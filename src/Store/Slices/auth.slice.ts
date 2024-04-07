import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LS_USER_TOKEN} from '../../Constants/LSConstants';

interface IAuthState {
  isAuthorization :boolean;
}

const initialState :IAuthState = {
  isAuthorization: !!localStorage.getItem(LS_USER_TOKEN)
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action :PayloadAction<boolean>) => {
      state.isAuthorization = action.payload;
    }
  }
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;