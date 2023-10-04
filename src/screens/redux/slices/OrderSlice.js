import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  //   isLoading: true,
};

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderItems(state, action) {
      state.data.push(action.payload);
      // console.log('ADD-ADDRESS------------------>', action.payload);
    },
  },
});

export const {orderItems} = OrderSlice.actions;

export default OrderSlice.reducer;
