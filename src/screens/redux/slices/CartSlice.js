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
      isItemExist = false;
      tempData.map(item => {
        if (item.id == action.payload.id) {
          isItemExist = true;
          item.qty = item.qty + 1;
        }
      });
      if (!isItemExist) {
        tempData.push(action.payload);
      }

      state.action = action.payload;
      //   console.log('first-------------------------->', tempData);
    },
    reduceItemsFromCart(state, action) {
      let tempData = state.data;

      tempData.map(item => {
        if (item.id == action.payload.id) {
          item.qty = item.qty - 1;
        }
      });

      state.action = action.payload;
    },
    removeItemsFromCart(state, action) {
      let tempData = state.data;

      tempData.splice(action.payload, 1);

      state.data = tempData;
    },
  },
});

export const {addItemsCart, reduceItemsFromCart, removeItemsFromCart} =
  CartSlice.actions;

export default CartSlice.reducer;
