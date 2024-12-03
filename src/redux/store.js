// redux/store.js
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore
import authReducer from "./reducers/authReducer";
import ViewCartReducer from "./reducers/ViewCartReducer";
// Create the Redux store with the authReducer
const store = configureStore({
  reducer: {
    auth: authReducer, // Include the reducer as part of the store
    cart: ViewCartReducer,
  },
});

export default store;
