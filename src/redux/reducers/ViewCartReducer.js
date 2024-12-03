const initialState = {
  cart: [], // This ensures the cart is always an array
};
const ViewCartReducer = (state = initialState, action) => {
  console.log("Action payload:", action.payload);

  switch (action.type) {
    case "ADD-TO-CART": {
      const exists = state.cart.some((item) => item.id === action.payload.id);
      if (exists) {
        alert("item already exists");
        console.log("Item already exists in the cart:", action.payload);
        return state; // Return the current state without adding the duplicate item
      }
      console.log("Adding item to cart:", action.payload);
      return {
        ...state,
        cart: [...state.cart, action.payload], // Add new item to the cart
      };
    }

    case "DELETE-ITEM": {
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      console.log("filtered" + filteredCart);
      return {
        ...state,
        cart: filteredCart,
      };
    }
    default:
      return state;
  }
};
export default ViewCartReducer;
