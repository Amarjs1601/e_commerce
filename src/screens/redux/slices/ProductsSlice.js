import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: true,
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const {addProducts} = ProductsSlice.actions;

export default ProductsSlice.reducer;
