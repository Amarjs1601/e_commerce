import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../slices/ProductsSlice';
import productWishList from '../slices/WishList';
import cartReducer from '../slices/CartSlice';
import AddressReducer from '../slices/AddressSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    wishlist: productWishList,
    cart: cartReducer,
    address: AddressReducer,
  },
});
