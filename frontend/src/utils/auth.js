// auth.js
import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';
const UserInfoKey = 'Admin-UserInfo';

/**
 * 获取token
 */
export function getToken() {
  return Cookies.get(TokenKey);
}

/**
 * 设置token
 */
export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

/**
 * 删除token
 */
export function removeToken() {
  return Cookies.remove(TokenKey);
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  const userInfo = Cookies.get(UserInfoKey);
  return userInfo ? JSON.parse(userInfo) : null;
}

/**
 * 设置用户信息
 */
export function setUserInfo(userInfo) {
  return Cookies.set(UserInfoKey, JSON.stringify(userInfo));
}

/**
 * 删除用户信息
 */
export function removeUserInfo() {
  return Cookies.remove(UserInfoKey);
}

/**
 * 清除所有认证信息
 */
export function clearAuth() {
  removeToken();
  removeUserInfo();
}