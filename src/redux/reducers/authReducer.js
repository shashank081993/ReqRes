const initialState = {
  isAuthenticated: false,
  user: JSON.parse(localStorage.getItem("userDetails")) || null, // Retrieve user from localStorage if available
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("controll reached local storage code");
      localStorage.setItem("userDetails", JSON.stringify(action.payload)); // Store user details in localStorage
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("userDetails"); // Clear user details from localStorage
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
