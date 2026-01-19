import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import store from '../store';
import { getToken, clearAuth } from './auth';

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API || '/api',
  // 超时
  timeout: 30000
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 是否需要设置token
    const isToken = (config.headers || {}).isToken === false;
    
    // 如果存在token则添加到请求头
    if (getToken() && !isToken) {
      config.headers['Authorization'] = 'Bearer ' + getToken();
    }
    
    // 设置Content-Type
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json;charset=utf-8';
    }
    
    return config;
  },
  error => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 直接返回响应数据
    return response.data;
  },
  error => {
    console.error('响应错误:', error);
    
    let message = '请求失败';
    
    if (error.response) {
      // 服务器返回错误状态码
      const status = error.response.status;
      
      switch (status) {
        case 401:
          // 未授权，清除认证信息并跳转到登录页
          if (store.getters.token) {
            MessageBox.confirm('登录状态已过期，请重新登录', '系统提示', {
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              store.dispatch('LogOut').then(() => {
                location.reload();
              });
            }).catch(() => {
              // 取消操作
            });
          }
          message = '登录状态已过期，请重新登录';
          break;
        case 403:
          message = '没有权限访问该资源';
          break;
        case 404:
          message = '请求的资源不存在';
          break;
        case 500:
          message = '服务器内部错误';
          break;
        default:
          message = `请求失败 (${status})`;
      }
    } else if (error.message.includes('timeout')) {
      message = '请求超时，请稍后重试';
    } else if (error.message.includes('Network Error')) {
      message = '网络错误，请检查网络连接';
    }
    
    // 显示错误消息
    Message({
      message: message,
      type: 'error',
      duration: 3000
    });
    
    return Promise.reject(error);
  }
);

export default service;