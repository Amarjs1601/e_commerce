import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  //   isLoading: true,
};

export const CartSlice = createSlice({
  name: 'cartslice',
  initialState,
  reducers: {
    addItemsCart(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.action = action.payload;
      //   console.log('first-------------------------->', tempData);
    },
  },
});

export const {addItemsCart} = CartSlice.actions;

export default CartSlice.reducer;
