import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  //   isLoading: true,
};

export const Wishlist = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemsWishList(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.action = action.payload;
      //   console.log('first-------------------------->', tempData);
    },
  },
});

export const {addItemsWishList} = Wishlist.actions;

export default Wishlist.reducer;
