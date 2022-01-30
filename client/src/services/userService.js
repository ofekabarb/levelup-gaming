import httpService, { setDefaultCommonHeader } from "./httpService";
import { myUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
// the function from httpService - sets default header to any request (key , value) - in our case -> 'x-auth-token' = 'token'
setDefaultCommonHeader("x-auth-token", getJwt());

// get the user token from the local storage
export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

// a function that create a new user by request to the server
export function createUser(user) {
  return httpService.post(`${myUrl}/levelup/users`, user);
}

// a function that login the user by his email and password and set the token key (x-auth-token) and the token into the local storage
export async function login(email, password) {
  const {
    data: { token },
  } = await httpService.post(`${myUrl}/levelup/auth`, {
    email,
    password,
  });
  localStorage.setItem(TOKEN_KEY, token);
}

// a function that checks if user is logged in .
export function isUserLogged() {
  try {
    const jwt = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(jwt);
  } catch {
    return null;
  }
}

// a function that logout user from thw website by removing his token key from the local storage
export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

// a function that will shows the user data by his id
export async function getUserInfo(id) {
  return httpService.get(`${myUrl}/levelup/users/${id}`);
}

// a function that will edit the user data
export function editUser({ _id, ...body }) {
  return httpService.put(`${myUrl}/levelup/users/${_id}`, body);
}

// a function that will delete a user by his id
export function deleteUser(id) {
  return httpService.delete(`${myUrl}/levelup/users/${id}`);
}

const userService = {
  createUser,
  login,
  isUserLogged,
  logout,
  getUserInfo,
  editUser,
  deleteUser,
};

export default userService;
