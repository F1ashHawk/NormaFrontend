import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IOrderState {
  title: string,
  info: string,
  date: string,
  address: string,
  cost: string,
  comment: string,
}

const initialState :IOrderState = {
  title: '',
  info:  '',
  date:   '',
  address:  '',
  cost:   '',
  comment: ''
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setTitle: (state, action :PayloadAction<string>) => {
      state.title = action.payload;
    },
    setInfo:  (state, action  :PayloadAction<string>)  => {
      state.info = action.payload;
    },
    setDate:   (state, action   :PayloadAction<string>)   =>  {
      state.date = action.payload;
    },
    setAddress:   (state, action   :PayloadAction<string>)   =>   {
      state.address = action.payload;
    },
    setCost: (state, action    :PayloadAction<string>)    =>   {
      state.cost = action.payload;
    },
    setComment:  (state, action  :PayloadAction<string>)  =>  {
      state.comment = action.payload;

    }
  }
});

export const orderActions = orderSlice.actions;
export const orderReducer = orderSlice.reducer;