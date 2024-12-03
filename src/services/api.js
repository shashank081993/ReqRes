import axios from "axios";

const API_Login_URL = "https://dummyjson.com/auth/login";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(API_Login_URL, { username, password });
    return response.data;
  } catch (error) {
    console.error("Error during login", error);
    throw new Error("Login failed");
  }
};
