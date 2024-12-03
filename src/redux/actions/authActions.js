export const setUserDetails = (userDetails) => {
  return {
    type: "SET_USER",
    payload: userDetails,
  };
};

export const logOutUser = () => {
  return {
    type: "LOGOUT",
  };
};
