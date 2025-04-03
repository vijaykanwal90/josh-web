import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice.js';
import cartReducer from './features/cart/cartSlice.js';
import bundleReducer from './features/bundles/BundleSlice.js'
import courseReducer from './features/courses/courseSlice.js';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        bundle: bundleReducer,
        course: courseReducer,
    },
});
export default store;