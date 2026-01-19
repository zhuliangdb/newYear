import { defineStore } from 'pinia';
import { getToken, setToken, removeToken, getUserInfo, setUserInfo, removeUserInfo, clearAuth } from '../utils/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: getToken() || '',
    userInfo: getUserInfo() || {}
  }),
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    /**
     * 设置token
     */
    setToken(token) {
      this.token = token;
      setToken(token);
    },
    /**
     * 设置用户信息
     */
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
      setUserInfo(userInfo);
    },
    /**
     * 清除认证信息
     */
    clearAuth() {
      this.token = '';
      this.userInfo = {};
      clearAuth();
    },
    /**
     * 登录
     */
    login(userInfo) {
      return new Promise((resolve, reject) => {
        // 这里可以调用登录API
        // 登录成功后设置token和用户信息
        // this.setToken(token);
        // this.setUserInfo(userInfo);
        resolve();
      });
    },
    /**
     * 登出
     */
    logout() {
      return new Promise(resolve => {
        this.clearAuth();
        resolve();
      });
    },
    /**
     * 强制登出（用于处理401错误）
     */
    fedLogout() {
      return new Promise(resolve => {
        this.clearAuth();
        resolve();
      });
    },
    /**
     * 刷新token
     */
    refreshToken() {
      return new Promise((resolve, reject) => {
        // 这里可以调用刷新token的API
        // 刷新成功后更新token
        // this.setToken(newToken);
        resolve();
      });
    }
  }
});