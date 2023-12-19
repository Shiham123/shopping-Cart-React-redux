import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './AuthSlice';
import { cartSlice } from './cartSlice';
import { interfaceSlice } from './interfaceSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    interface: interfaceSlice.reducer,
  },
});

export default store;
