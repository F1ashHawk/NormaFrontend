import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IRoleState {
  role :'client' | 'specialist' | null;
}

const initialState :IRoleState = {
  role: 'client'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole: (state, action :PayloadAction<'client' | 'specialist' | null>) => {
      state.role = action.payload;
    }
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;