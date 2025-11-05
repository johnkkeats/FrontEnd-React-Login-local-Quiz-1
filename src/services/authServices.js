import API from "./api";

export const loginUser = async (data) => {
  return await API.post("http://localhost:5001/api/user/login", data);
};

export const registerUser = async (data) => {
  return await API.post("http://localhost:5001/api/user/register", data);
};
